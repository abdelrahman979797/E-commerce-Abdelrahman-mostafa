import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { UserContext } from '../../Context/ContextUser'
export default function Login() {

  let [loading, setloading] = useState(true)
  let [errmessage, setErrmessage] = useState("")

  let navgat = useNavigate()


  let { setUserData } = useContext(UserContext)
  let validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("enter your email"),
    password: Yup.string().required("password is required").matches(/^[A-Z][a-z!@#()%$_0-9]{8,16}$/, "enter valid password"),
  })


  async function loginUser(val) {
    setloading(false)
    let req = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", val).catch((err) => {
      setloading(true)
      console.log(err);
      setErrmessage(err.response.data.message)

    }
    )
    console.log(req);
    if (req?.data.message == "success") {
      localStorage.setItem("Token", req.data.token)
      setloading(true)
      setUserData(req.data.token)
      navgat("/")
    }
    console.log(req)
  }

  let form1 = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema
  })


  return (
    <><div className=' container'>
      {errmessage != "" ? <div className=' alert alert-danger'>{errmessage}</div> : ""}
      <form onSubmit={form1.handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="email" className=' form-control w-100 m-auto' name='email'
          id='email' onChange={form1.handleChange} onBlur={form1.handleBlur} />
        {(form1.errors.email && form1.touched.email) ? <div className=' alert-danger alert'>{form1.errors.email}</div> : ""}
        <label htmlFor="password">password</label>
        <input type="password" className=' form-control w-100 m-auto' name='password'
          id='password' onChange={form1.handleChange} onBlur={form1.handleBlur} />
        {(form1.errors.password && form1.touched.password) ? <div className=' alert-danger alert'>{form1.errors.password}</div> : ""}
        {loading ? <button disabled={!(form1.isValid && form1.dirty)} className='btn bg-main mt-5' type='submit'>Login</button> : <button className='btn btn-success mt-5'><i className=' fa-solid fa-spinner fa-spin'></i></button>}
      </form>
    </div></>
  )
}
