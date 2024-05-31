let cart = {}; // use an object to store cart data

// add event listener to add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const product = getProductById(productId);
        if (product) {
            addProductToCart(product);
            updateCartSummary();
        }
    });
});

// get product by id
function getProductById(id) {
    // todo: implement product data storage and retrieval
    // for now, return a sample product
    return {
        id: id,
        name: 'Espresso',
        price: 12.00,
        image: 'Espresso.jpg'
    };
}


// add product to cart
function addProductToCart(product) {
    if (!cart[product.id]) {
        cart[product.id] = { product, quantity: 1 };
    } else {
        cart[product.id].quantity++;
    }
}

// update cart summary
function updateCartSummary() {
    const cartSummaryElement = document.getElementById('cart-summary');
    const totalQuantity = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    cartSummaryElement.innerHTML = `Cart: ${totalQuantity} items, Total: R${totalPrice.toFixed(2)}`;
}