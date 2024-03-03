import axios from "axios"
import { createContext, useEffect, useState } from "react"

export let CartConText = createContext()

export function CartConTextProvider({ children }) {

    

    let [numOfCartItems, setnumOfCartItems] = useState(0)

    let [cart,setCart] = useState([])

    function addCart(id) {
        let options = {
            headers: {
                token: localStorage.getItem("Token"),
            }
        }
        console.log(options);
        let body = {
            productId: id
        }


        return axios.post("https://ecommerce.routemisr.com/api/v1/cart", body, options)
    }


    return <CartConText.Provider value={{ numOfCartItems, setnumOfCartItems, addCart, setCart, cart }} >
        {children}
    </CartConText.Provider>


}