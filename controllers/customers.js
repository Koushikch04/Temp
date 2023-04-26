const customerModel = require('../models/userSchema');
const countsSchema = require("../models/counts");
const pageLimitSize = 10;


exports.customersSortAndSearch = async (req, res) => {
  try {
    console.log(req.query);
    let allCustomers;
    let searchInitial;
    if (req.query) searchInitial = req.query.search;
    else searchInitial = "";
    const searchText = searchInitial;

    const count = await countsSchema.findOne({ countId: "message" });
    // let sorting;
    allCustomers = await customerModel.find();
    console.log(allCustomers)
    if (searchText && searchText != "" && searchText.length > 0) {
      allCustomers = allCustomers.filter(customer => {
        return (
          customer.name.firstName == searchText ||
          customer.name.lastName == searchText ||
          customer.mailId == searchText
        );
      });
    }

    const endingPage = Math.ceil(allCustomers.length / pageLimitSize);
    let currentPage;
    if (!req.query || !req.query.pagination) currentPage = 1;
    else currentPage = req.query.pagination;
    const filtersApplied = [];
    console.log(allCustomers);
    res.render("./HTML/Admin/adminCustomers.ejs", {
      messageCount: count.countCustomers,
      login: true,
      messages: allCustomers,
      select: 0,
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
    await customerModel.findByIdAndRemove(idArray[i]);
  }
  res.redirect("/profile/admin/customers");
};
