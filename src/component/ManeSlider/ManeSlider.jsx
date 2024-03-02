import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"
export default function ManeSlider() {
    return (
        <>

            <div className='row g-0 mainOwl px-5 pt-3'>
                <div className=' col-md-9 '>
                    <OwlCarousel items={1} loop autoplay={true} autoplayTimeout={5000}>
                        <div className='item'>
                            <img src={img1} alt="" className='w-100 ' height={400} />
                        </div>
                        <div className='item'>
                            <img src={img2} alt="" className='w-100 ' height={400} />
                        </div>
                        <div className='item'>
                            <img src={img3} alt="" className='w-100 ' height={400} />
                        </div>
                    </OwlCarousel>

                </div>
                <div className=' col-md-3'>
                    <img src={img2} alt="" className=' w-100' height={200} />
                    <img src={img3} alt="" className=' w-100' height={200} />
                </div>
            </div>


            {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
                
                <div className='item'>
                    <h4>12</h4>
                </div>
            </OwlCarousel>; */}
        </>
    )
}
