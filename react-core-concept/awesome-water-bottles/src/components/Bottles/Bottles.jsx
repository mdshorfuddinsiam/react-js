import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToStoredCart, getStoredCart } from '../../utilities/localstorage';

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

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, []);

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <h4>Add To Cart: {cart.length}</h4>
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