import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);   

    const handleAddToCart = (bottle) => {
        console.log('Bottle will be added to the cart', bottle);
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
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