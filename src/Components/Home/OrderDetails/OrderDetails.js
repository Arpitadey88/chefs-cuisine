import React, { useState } from 'react';
import { useParams } from 'react-router';
import data from './foods.json';
import './OrderDetails.css'

const OrderDetails = () => {
    const { orderId } = useParams();
    const detailsInfo = data.filter(dt => dt.id === orderId);
    // console.log(detailsInfo);
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("Small")
    return (
        <div id="orderDetails" className="rounded-2 container">
            <h1 className="text-center fw-bold py-3" style={{ color: '#323232' }} >Food Details </h1>
            <div className="row g-4 pb-5">
                <div className="col-md-6 text-center">
                    <div className="card border-0 pt-2">
                        <h2 className='py-1' style={{ color: '#323232' }}>{detailsInfo[0].title}</h2>
                        <img style={{ height: '260px' }}   src={detailsInfo[0].image} className="w-75 rounded-3 mx-auto" alt="..." />
                        <div className="d-flex mx-4 py-4">
                            <div className="w-100">
                                <span className='fs-5'>Varients : </span>
                                <select className='ms-3' vlaue={varient} onChange={(e) => { setVarient(e.target.value) }}>
                                    {detailsInfo[0].varients.map(varient => {
                                        return <option value={varient}>{varient}</option>
                                    })} 
                                </select>
                            </div>
                            <div className="w-100">
                                <span className='fs-5'>Quantity :</span>
                                <select className='ms-3' vlaue={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                    {[...Array(10).keys()].map((x, i) => {
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}
                                </select>
                            </div>
                        </div>


                        <div className="d-flex mx-5">
                            <div className="w-100 text-start">
                                <h5 className='ms-3'>{detailsInfo[0].category}</h5>
                            </div>

                            <div className="w-100 text-end">
                                <h5 className='me-4'>Price: {detailsInfo[0].price[0][varient] * quantity}</h5>
                            </div>
                        </div>
                        <h6 className="mx-1 px-5 py-3 text-secondary">{detailsInfo[0].description}</h6>

                    </div>
                </div>

                <div className="col-md-6">
                    <div className="submit-order py-3">
                    <h2 className="text-center" style={{ color: '#323232' }}>Confirm Your Order</h2>
                    <form className="py-4">
                        <input className='py-2 ps-2  rounded-3 fw-bold' type="text" />
                        
                        <input className='py-2 ps-2 rounded-3 fw-bold' type="text" />
                        
                        <input className='py-2 ps-2 rounded-3 fw-bold' type="email" />
                  
                        <input className='py-2 ps-2 rounded-3 fw-bold' type="number" />
                      
                        <input style={{ backgroundColor: '#323232' }} className='mt-4 py-2 ps-2 fs-5 border-0 rounded-3 fw-bold text-white' type="submit" value="Order Now" />
                    </form>
                    </div>
                </div>
            </div>

            {/* <button></button> */}
        </div>
    );
};

export default OrderDetails;