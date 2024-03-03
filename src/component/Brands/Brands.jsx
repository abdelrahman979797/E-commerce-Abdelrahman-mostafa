import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Loader from '../Loader/Loader'

export default function Brands() {
  function getAllBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
  let { data, isLoading } = useQuery('BrandsApi', getAllBrands)
  if (isLoading) {
    return <Loader></Loader>
  }
  const Brands = data.data.data
  console.log(data.data.data)

  return (
    <>

      <div className=' container'>
        <div className='row g-3 p-3'>
          {Brands.map((el) => {
            return <div className=' col-md-4' >
              <div className='proudcts rounded-3'>
                <div className='  border-5'><img src={el.image} className='w-100 border-bottom-3' height={350} alt="" /></div>
                <div><h3 className=' textMain'>{el.name}</h3>
                </div>
              </div>

            </div>
          })}

        </div>
      </div>
    </>
  )
}

