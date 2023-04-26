const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const clo = document.getElementById('close');
// const xhr = new XMLHttpRequest()
let Names = document.querySelector('.Names-data').innerText.split(',')
let prices = document.querySelector('.prices-data').innerText.split(',')
let src = document.querySelector('.src-data').innerText.split(',')

// alert(Names)
// alert(prices)
// alert(src)

let a = []
prices.forEach(p =>
    a.push(parseFloat(p)))

prices = a


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}
if (clo) {
    clo.addEventListener('click', () => {
        nav.classList.add('change');
    })
}

// addToCartFromDb()
let qunatityInputs = document.getElementsByClassName('qty');
for (let i = 0; i < qunatityInputs.length; i++) {
    let input = qunatityInputs[i]
    input.addEventListener('change', function (event) {
        updateCartTotal()
    })
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
    let x = cartItemContainer.getElementsByClassName('box')
    let total = 0;
    for (let i = 0; i < x.length; i++) {
        let cartRows = x[i].getElementsByClassName('content');
        let priceElement = cartRows[0].getElementsByClassName('price')
        let quantityElement = cartRows[0].getElementsByClassName('qty')
        let price = parseFloat(priceElement[0].innerText.replace('Rs.', ''))
        let quantity = quantityElement[0].value
        total = total + price * quantity
    }
    let y = cartItemContainer.getElementsByClassName('total')
    let z = y[0].innerText = 'Total :' + total
}

let acc = document.querySelector('.data')
let data = {
    products: [
        JSON.parse(document.querySelector('.data').innerHTML)
    ]
}

let card = document.getElementsByClassName('pro-container');
let xyz = card[0];
for (let i = 0; i < data.products[0].length; i++) {
    xyz.innerHTML += `<div class="pro ${data.products[0][i].petType}">
                <img class="imgsrc" src="${data.products[0][i].productDetails.src}" alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5 class="title">${data.products[0][i].productDetails.Name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4 class="rate"><i class="fa-solid fa-indian-rupee-sign"></i>${data.products[0][i].productDetails.price}</h4>
                </div>
                <p class="name" style="display: none;">${data.products[0][i].productDetails.Name}</p>
                <p class="price" style="display: none;">${data.products[0][i].productDetails.price}</p>
                <p class="src" style="display: none;">${data.products[0][i].productDetails.src}</p>
                <p class="type" style="display: none;">Accessory</p>
                <button class="product-cart"><i class="fa-solid fa-cart-shopping" id="shop"></i></button>
            </div>`;
}

let dog = document.getElementsByClassName('dogs');
let cat = document.getElementsByClassName('cats');
let bird = document.getElementsByClassName('birds');
let fish = document.getElementsByClassName('fishes');
function refresh() {
    let elements = document.querySelectorAll(".pro");
    elements.forEach((ele) => {
        ele.classList.remove('inactive');
    })
    const ex = document.getElementsByClassName('button-value');


    for (let i = 0; i < ex.length; i++) {
        let check = ex[i];
        check.addEventListener('click', () => {
            switch (check.innerHTML) {
                case "All":
                    for (let i = 0; i < 5; i++) {
                        let c1 = cat[i];
                        let c2 = bird[i];
                        let c3 = fish[i];
                        let c4 = dog[i];


                        c1.classList.remove('inactive');
                        c2.classList.remove('inactive');
                        c3.classList.remove('inactive');
                        c4.classList.remove('inactive')

                    }
                    check.classList.add("active");
                    break;
                case "Dog":
                    for (let i = 0; i < 5; i++) {
                        let c1 = cat[i];
                        let c2 = bird[i];
                        let c3 = fish[i];
                        console.log(c1)
                        c1.classList.add('inactive');
                        c2.classList.add('inactive');
                        c3.classList.add('inactive');

                    }
                    check.classList.add("active");
                    break;
                case "Cat":
                    for (let i = 0; i < 5; i++) {
                        let c1 = dog[i];
                        let c2 = bird[i];
                        let c3 = fish[i];

                        c1.classList.add('inactive');
                        c2.classList.add('inactive');
                        c3.classList.add('inactive');

                    }
                    check.classList.add("active");
                    break;
                case "Bird":
                    for (let i = 0; i < 5; i++) {
                        let c1 = dog[i];
                        let c2 = cat[i];
                        let c3 = fish[i];

                        c1.classList.add('inactive');
                        c2.classList.add('inactive');
                        c3.classList.add('inactive');

                    }
                    check.classList.add("active");
                    break;
                case "Fish":
                    for (let i = 0; i < 5; i++) {
                        let c1 = dog[i];
                        let c2 = bird[i];
                        let c3 = cat[i];

                        c1.classList.add('inactive');
                        c2.classList.add('inactive');
                        c3.classList.add('inactive');

                    }
                    check.classList.add("active");
                    break;
            }
        })
        check.classList.remove('active');

    }
}

function convertFirstToUpper(value) {
    let v = value[0].toUpperCase();
    value = v + value.substr(1);
    console.log(value);
    return value;
}

// search
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".pro");
    elements.forEach((element, index) => {
        if (element.innerHTML.includes(searchInput)) {
            cards[index].classList.remove("inactive");
        } else {
            cards[index].classList.add("inactive");
        }
    });
});

