import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = (props) => {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("Small")
    // console.log(props.food);
    const {id, title, image, varients, price } = props.food;
    return (
        <div style={{ width: '350px' }} className='card border-0 p-0 my-3 col mx-lg-auto'>
            <img className='img-fluid image' style={{
                height: '15rem'
            }} src={image} alt="" />
            <div className="card-body">
                <h5 className='m-1' >{title}</h5>
                <div className="d-flex">
                    <div className="w-100 m-1">
                        <h6>Varients</h6>
                        <select className='form-select' vlaue ={varient} onChange={(e) =>{setVarient(e.target.value)}}>
                            {varients.map(varient => {
                                return <option value={varient}>{varient}</option>
                            })}
                        </select>
                    </div>
                    <div className="w-100 m-1">
                        <h6>Quantity</h6>
                        <select className='form-select' vlaue ={quantity} onChange={(e) =>{setQuantity(e.target.value)}}>
                            {[...Array(10).keys()].map((x, i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="d-flex mt-3">
                    <div className="w-100">
                        <h5 className='ms-2 my-1'>Price: {price[0][varient]* quantity}</h5>
                    </div>

                    <div className="w-100 text-center">
                    <Link to={`/details/${id}`}><button className='btn btn-danger px-lg-4'>Add To Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default FoodItem;