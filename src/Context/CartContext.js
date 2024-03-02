import axios from "axios"
import { createContext, useState } from "react"

export let CartConText = createContext()

export function CartConTextProvider({ children }) {

    let [numOfCartItems, setnumOfCartItems] = useState()


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


    return <CartConText.Provider value={{ numOfCartItems, setnumOfCartItems , addCart }} >
        {children}
    </CartConText.Provider>


}