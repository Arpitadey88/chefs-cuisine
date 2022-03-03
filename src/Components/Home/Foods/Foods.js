import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div className="container my-5">
            <div className='row mx-auto px-2'>
                <h2>this is foods {foods.length}</h2>
                {
                    foods.map(food => <FoodItem
                        key={food.id} food={food}>
                    </FoodItem>)
                }
            </div>
        </div>
    );
};

export default Foods;