let carts = document.querySelectorAll('#buy_button');

let products = [{
    name: 'Glitters',
    tag: '6ZqhjV3/pic11',
    price: 10,
    inCart: 0
}, {
    name: 'Origami Stars',
    tag: 'BBCXkdy/pic12',
    price: 15,
    inCart: 0
}, {
    name: 'Origami Paper',
    tag: 'RcZs3p8/pic13',
    price: 24,
    inCart: 0
}, {
    name: 'Stickers',
    tag: 'bNMb58Z/pic14',
    price: 20,
    inCart: 0
}, {
    name: 'Sewing Kit',
    tag: 'XY5B4d0/pic15',
    price: 32,
    inCart: 0
}]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is ", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img style="width: 80px;" src=https://i.ibb.co/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}.000 VND</div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">${item.inCart * item.price}.000 VND</div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4><h4 class="basketTotal">${cartCost}.000 VND</h4>
            </div>
        `
    }
}

// Remove function

let rmcarts = document.querySelectorAll('#remove-button');

for (let i = 0; i < rmcarts.length; i++) {
    rmcarts[i].addEventListener('click', () => {
        rmcartNumbers(products[i]);
        rmtotalCost(products[i]);
        // rmdisplayCart();
    });
}

function rmcartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers > 0) {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    } else {
        localStorage.setItem('cartNumbers', 0);
        document.querySelector('.cart span').textContent = 0;
    }

    rmsetItems(product);
}

function rmsetItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null && products.inCart > 0) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart -= 1;
    } else {
        product.inCart = 0;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function rmtotalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is ", cartCost);
    console.log(typeof cartCost);
    cartCost = parseInt(cartCost);
    console.log(typeof cartCost);

    if (cartCost > 0) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost - product.price);
    } else {
        localStorage.setItem("totalCost", 0);
    }
}

onLoadCartNumbers();
displayCart();