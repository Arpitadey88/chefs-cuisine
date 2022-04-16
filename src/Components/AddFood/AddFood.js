import React from 'react';
// import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './AddFood.css'
import axios from 'axios';

const AddFood = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/foods', data)
        .then(res => {
            console.log(res);
        })
    }
    return (
        <div>
            <div className="add-food">
                <h1 style={{ color: '#323232' }} className="text-center my-2">Add New Food</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("image")} placeholder="Enter Image URl" />
                    <input {...register("title", { required: true })} placeholder="Title" />
                    <textarea className='food-order' {...register("description")} placeholder="Description" />
                    <input {...register("price")} placeholder="Price" />
                    <div className="w-100">
                                <span className='fs-5'>Varients : </span>
                                <select className='ms-3' vlaue={"varient"} >
                                     <option value={"small"}>{"large"}</option>
                                    
                                </select>
                            </div>
                    <div className="w-100">
                                <span className='fs-5'>Quantity :</span>
                                <select className='ms-3' vlaue={"quantity"} >
                                    {[...Array(10).keys()].map((x, i) => {
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}
                                </select>
                            </div>
                    <input type="submit" />
                </form>
                <div className="text-center">
                    <Link to="/dashboard"><Button className="mx-5 px-5 py-2">Go Dashboard</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default AddFood;