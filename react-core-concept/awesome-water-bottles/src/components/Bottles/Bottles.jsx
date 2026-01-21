import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToStoredCart, getStoredCart, removeStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);   

    const handleAddToCart = (bottle) => {
        // console.log('Bottle will be added to the cart', bottle);

        const newCart = [...cart, bottle];
        setCart(newCart);

        addToStoredCart(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
        // console.log('remove item from the cart', id)

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        // console.log(remainingCart);

        setCart(remainingCart);
        removeStoredCart(id);
    }

    useEffect(() => {

        const storedCartIds = getStoredCart();
        // console.log(storedCartIds);

        const storedCart = [];
        for(const id of storedCartIds){
            // console.log(id);
            if(id){
                const cartBottle = bottles.find(bottle => bottle.id == id);
                if(cartBottle){
                    storedCart.push(cartBottle);
                }
            }
        }

        // console.log('stored cart', storedCart);
        setCart(storedCart);

    }, []);

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <h4>Add To Cart: {cart.length}</h4>
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    handleAddToCart={handleAddToCart}
                    bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;