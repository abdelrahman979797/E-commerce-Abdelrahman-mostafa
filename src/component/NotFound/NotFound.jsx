import React from 'react'
import img1 from '../../assets/images/error.svg'
export default function NotFound() {
  return (
    <div className=' d-flex  jus'>
      <img src={img1} alt="" className='' />
      <h2 className=' text-capitalize'>this page not found</h2>
    </div>
  )
}

