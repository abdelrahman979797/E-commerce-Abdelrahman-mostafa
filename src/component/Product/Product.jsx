import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'




export default function Product() {

  function getProduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  let { data, isLoading } = useQuery('productApi', getProduct)
  if (isLoading) {
    return <Loader></Loader>
  }
  const productlist = data.data.data
  // const [filteredList, setFilteredList] = new useState(productlist);

  return (
    <>
      <div className=' container' >
        
        {/* <div className=' d-flex justify-content-center mt-3 p-1'>
          <input type="search" className=' w-75 form-control' placeholder='search ...' />
        </div> */}
        <div className='row g-5'>
          {productlist.map((el) => {
            return <div className=' col-md-3' key={el.id}>
              <Link to={`/proudctsDetails/${el.id}`} >
                <div className='proudcts rounded-3'>
                  <img src={el.imageCover
                  } className=' w-100  rounded-3' alt="" />
                  <h6 className='textMain'></h6>
                  <h5>{el.title.split(" ").slice(0, 2).join(" ")}</h5>
                  <div className=' d-flex justify-content-between'>
                    <span>{el.price}L.E</span>
                    <span><i className=' fa-solid fa-star starColor'></i>{el.ratingsAverage}</span>
                  </div>
                  <button className='btn bg-main text-white d-block w-100'>ADD proudct</button>
                </div>
              </Link>
            </div>
          })}

        </div>
      </div>
    </>
  )
}
