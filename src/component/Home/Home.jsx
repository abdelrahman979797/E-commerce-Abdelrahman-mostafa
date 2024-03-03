// https://ecommerce.routemisr.com
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import ManeSlider from '../ManeSlider/ManeSlider'
import { CartConText } from '../../Context/CartContext'
import Swal from 'sweetalert2'




export default function Home() {



    let { addCart, setnumOfCartItems } = useContext(CartConText)



    function getProduct() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
    let { data, isLoading } = useQuery('productApi', getProduct)
    if (isLoading) {
        return <Loader></Loader>
    }
    const productlist = data.data.data



    async function addToUserCart(id) {
        let req = await addCart(id)
        console.log(id);
        if (req.data.status === 'success') {
            setnumOfCartItems(req.data.numOfCartItems)

            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: (req.data.message),
            });
        }
        console.log(req);
    }
    return (<>
        <ManeSlider></ManeSlider>
        <div className=' container' >
            <div className='row g-5'>
                {productlist.map((el) => {
                    return <div className=' col-md-3' key={el.id}>
                        <div className='proudcts rounded-3'>
                            <Link to={`/proudctsDetails/${el.id}`} >
                                <img src={el.imageCover
                                } className=' w-100  rounded-3' alt="" />
                                <h6 className='textMain'></h6>
                                <h5>{el.title.split(" ").slice(0, 2).join(" ")}</h5>
                                <div className=' d-flex justify-content-between'>
                                    <span>{el.price}L.E</span>
                                    <span><i className=' fa-solid fa-star starColor'></i>{el.ratingsAverage}</span>
                                </div>
                            </Link>
                            <button onClick={() => addToUserCart(el.id)} className='btn bg-main text-white d-block w-100'>ADD proudct</button>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </>

    )
}
