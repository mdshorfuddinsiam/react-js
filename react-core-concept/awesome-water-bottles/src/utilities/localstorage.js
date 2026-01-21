const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart');
    
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    // cart.push(id);      // working
    const newCart = [...cart, id];

    // save new cart to local storage
    saveCartToLocalStorage(newCart);
}

const removeFromLocalStorage = (id) => {
    // console.log(id);
    const cart = getCartFromLocalStorage();
    // console.log(cart);
    const remainingCart = cart.filter(cartItem => cartItem !== id);
    // console.log(remainingCart);
    saveCartToLocalStorage(remainingCart);
}

export {
    getCartFromLocalStorage as getStoredCart, 
    addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeStoredCart
}