import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {
  let [loading, setloading] = useState(true)
  let [errmessage, setErrmessage] = useState("")

  let navgat = useNavigate()



  let validationSchema = Yup.object({
    name: Yup.string().required("name is required").min(3, "min character 3").max(20, "max character 20"),
    email: Yup.string().required("email is required").email("enter your email"),
    password: Yup.string().required("password is required").matches(/^[A-Z][a-z!@#()%$_0-9]{8,16}$/, "enter valid password"),
    rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "rePassword is not matched"),
    phone: Yup.string().required("phone is required").matches(/^01[1520][0-9]{8}$/, "phone number is required")
  })

  async function registeration(val) {
    setloading(false)
    let req = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", val).catch((err) => {
      setloading(true)
      console.log(err);
      setErrmessage(err.response.data.message)

    }
    )
    if (req?.data.message == "success") {
      console.log(req.data.message);
      navgat("/login")
      setloading(true)
    }
    console.log(req)
  }



  let form1 = useFormik({
    initialValues: {
      name: '',
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    onSubmit: registeration,
    validationSchema
  })

  return (
    <>
      <div className=' container'>
        {errmessage != "" ? <div className=' alert alert-danger'>{errmessage}</div> : ""}
        <h2></h2>
        <form onSubmit={form1.handleSubmit} >
          <label htmlFor="name">name</label>
          <input type="text" className=' form-control w-100 m-auto' name='name'
            id='name' onChange={form1.handleChange} onBlur={form1.handleBlur} />
          {(form1.errors.name && form1.touched.name) ? <div className=' alert-danger alert'>{form1.errors.name}</div> : ""}
          <label htmlFor="email">email</label>
          <input type="email" className=' form-control w-100 m-auto' name='email'
            id='email' onChange={form1.handleChange} onBlur={form1.handleBlur} />
          {(form1.errors.email && form1.touched.email) ? <div className=' alert-danger alert'>{form1.errors.email}</div> : ""}
          <label htmlFor="phone">phone</label>
          <input type="tel" className=' form-control w-100 m-auto' name='phone'
            id='phone' onChange={form1.handleChange} onBlur={form1.handleBlur} />
          {(form1.errors.phone && form1.touched.phone) ? <div className=' alert-danger alert'>{form1.errors.phone}</div> : ""}
          <label htmlFor="password">password</label>
          <input type="password" className=' form-control w-100 m-auto' name='password'
            id='password' onChange={form1.handleChange} onBlur={form1.handleBlur} />
          {(form1.errors.password && form1.touched.password) ? <div className=' alert-danger alert'>{form1.errors.password}</div> : ""}
          <label htmlFor="rePassword">rePassword</label>
          <input type="password" className=' form-control w-100 m-auto' name='rePassword'
            id='rePassword' onChange={form1.handleChange} onBlur={form1.handleBlur} />
          {(form1.errors.rePassword && form1.touched.rePassword) ? <div className=' alert-danger alert'>{form1.errors.rePassword}</div> : ""}
          {loading ? <button disabled={!(form1.isValid && form1.dirty)} className='btn bg-main mt-5' type='submit'>Register</button> : <button className='btn btn-success mt-5'><i className=' fa-solid fa-spinner fa-spin'></i></button>}

        </form>
      </div>

    </>
  )
}
