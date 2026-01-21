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

export {
    getCartFromLocalStorage as getStoredCart, 
    addItemToCartLocalStorage as addToStoredCart
}