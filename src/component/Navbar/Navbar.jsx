import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import img1 from "../../assets/images/freshcart-logo.svg"
import { UserContext } from '../../Context/ContextUser'
export default function Navbar() {
    let { userData, setUserData } = useContext(UserContext)
    let { numOfCartItems } = useContext(UserContext)
    let [data, setData] = useState(null)


    let navgate = useNavigate()
    function logOut() {
        setUserData(null)
        localStorage.setItem("userToken", null)
        navgate("/login")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container ">
                    <Link to=""><div className="navbar-brand">
                        <img src={img1} alt="" className=' cursorPointer' />
                    </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarText">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to=''>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='brands'>Brands</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='categories'>Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='proudcts'>Proudcts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='wishlist'>Wishlist</NavLink>
                            </li>

                        </ul>
                        <ul className='navbar-nav ms-auto'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='cart'><i className=' fa-solid fa-cart-shopping '></i></NavLink>
                                {numOfCartItems}
                            </li>



                            {userData != null ? <li className=' nav-item'>
                                <span className=" nav-link cursorPointer" onClick={logOut}> logOut</span>
                            </li> : <>  <li className="nav-item">
                                <NavLink className="nav-link" to='login'>Login</NavLink>
                            </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='register'>Register</NavLink>
                                </li></>}


                        </ul>
                    </div>
                </div>



            </nav>
        </>
    )
}
