
import axios from 'axios'

import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartConText } from '../../Context/CartContext';
export default function ProductDetails() {


    let { addCart, setnumOfCartItems } = useContext(CartConText)

    async function addToUserCart(id) {
        let req = await addCart(id)
        if (req.data.status === 'success') {

            setnumOfCartItems(req.data.setnumOfCartItems)

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









    let { id } = useParams();

    function getProductDetails({ queryKey }) {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${queryKey[1]}`
        )
    }
    let { data, isLoading } = useQuery(["ProductDataList", id], getProductDetails)
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(data.data.data)
    const ProductDetails = data.data.data

    return (

        <>
            <div className=' container  '>
                <div className='row g-3 pt-5 align-items-center'>

                    <div className='col-md-4 position-relative'>
                        <OwlCarousel items={1} loop dots={true}>
                            {ProductDetails.images.map((el)=>{
                                return <div className='item'><img src={el} alt="" className='w-100' /></div>
                            })}
                            
                        </OwlCarousel>

                    </div>
                    <div className='col-md-8'>
                        <h3>{ProductDetails.title}</h3>
                        <p>{ProductDetails.description}</p>
                        <div className=' d-flex  justify-content-between'>
                            <h6>{ProductDetails.price} L.E</h6>
                            <h6>{ProductDetails.ratingsAverage}<span><i className=' fa-solid fa-star starColor'></i></span></h6>
                        </div>
                        <div className=' d-flex justify-content-between pt-2'>
                            <button onClick={() => addToUserCart(ProductDetails.id)} className='btn addFocus bg-main text-white w-75 '>+ ADD</button>
                            <i className='fa-solid fa-heart h1 cursorPointer'></i>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}
