const countsSchema = require("../models/counts");
const productModel = require("../models/productSchema");
const pageLimitSize = 10;

exports.productsSortSearchAndFilters = async (req, res) => {
  try {
    console.log(req.query);
    let allProducts, petInitial, productInitial;
    let searchInitial;
    if (req.query) searchInitial = req.query.search;
    else searchInitial = "";
    const searchText = searchInitial;
    if (!req.query || !req.query.hasOwnProperty("pet")) {
      petInitial = "All";
      productInitial = "All";
    } else {
      petInitial = req.query.pet;
      productInitial = req.query.product;
    }

    const count = await countsSchema.findOne({ countId: "message" });
    // let sorting;
    let givenSorting;
    if (!req.query.hasOwnProperty("sortSelector")) givenSorting = 0;
    else givenSorting = req.query.sortSelector;
    console.log("given " + givenSorting);
    const sorting = givenSorting == 0 ? 1 : -1;

    console.log(sorting, searchText);
    allProducts = await productModel.find();
    if (searchText && searchText != "" && searchText.length > 0) {
      allProducts = allProducts.filter((product) => {
        return product.productDetails.Name == searchText;
      });
    }

    
    if (petInitial != "All") {
      allProducts = allProducts.filter((product) => {
        return product.petType == petInitial;
      });
    }
    
    if (productInitial != "All") {
      allProducts = allProducts.filter((product) => {
        return product.productType == productInitial;
      });
    }
    
    if (sorting == 1) {
      console.log("minus1")
      allProducts.sort((product1, product2) => {
        return product1.productDetails.price - product2.productDetails.price;
      });
    } else {
      allProducts.sort((product1, product2) => {
        return product2.productDetails.price - product1.productDetails.price;
      });
    }

    if (!givenSorting) givenSorting = 0;
    const endingPage = Math.ceil(allProducts.length / pageLimitSize);
    let currentPage;
    if (!req.query || !req.query.pagination) currentPage = 1;
    else currentPage = req.query.pagination;
    const filtersApplied = [petInitial, productInitial];
    console.log(givenSorting);
    res.render("./HTML/Admin/adminProducts.ejs", {
      messageCount: count.countProducts,
      login: true,
      messages: allProducts,
      select: givenSorting,
      searchText: searchText,
      endingPage: endingPage,
      currentPage: currentPage,
      limit: pageLimitSize,
      filtersApplied: filtersApplied,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

exports.deleteProduct = async (req, res) => {
  let deleteIdsArray = [];
  if (Array.isArray(req.query.deleteMessage)) {
    deleteIdsArray = req.query.deleteMessage;
  } else {
    deleteIdsArray.push(req.query.deleteMessage);
  }
  const idArray = deleteIdsArray;
  for (let i = 0; i < idArray.length; i++) {
    await productModel.findByIdAndRemove(idArray[i]);
  }
  res.redirect("/profile/admin/products");
};

exports.addProduct = async (req, res) => {
  console.log(req.body);
  const petType = req.body.petType;
  const productType = req.body.productType;
  const productName = req.body.productName;
  const productPrice = Number(req.body.productPrice);
  const productImage = req.body.productImage;

  const product = new productModel({
    petType: petType,
    productType: productType,
    productDetails: {
      Name: productName,
      price: productPrice,
      src: productImage
    }
  });

  product.save();
  res.redirect("/profile/admin/products");
}