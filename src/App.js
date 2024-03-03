
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'
import Product from './component/Product/Product'
import Cart from './component/Cart/Cart'
import Brands from './component/Brands/Brands'
import Login from './component/Login/Login'
import WishList from './component/WishList/WishList'
import Categories from './component/Categories/Categories'
import Register from './component/Register/Register'
import NotFound from './component/NotFound/NotFound'
import ProductDetails from './component/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProtectedRouting from './component/ProtectedRouting/ProtectedRouting'
import { UserContextProvider } from './Context/ContextUser'
import { CartConTextProvider } from './Context/CartContext'

export default function App() {

  let QueryClients = new QueryClient()
  let Route = createBrowserRouter(
    [

      {
        path: '', element: <Layout />, children:
          [
            { index: true, element: <ProtectedRouting><Home></Home></ProtectedRouting> },
            {
              path: "proudcts", element: <ProtectedRouting><Product></Product></ProtectedRouting>
            },
            { path: "proudctsDetails/:id", element: <ProductDetails></ProductDetails> },
            { path: "cart", element: <Cart></Cart> },
            { path: "brands", element: <Brands></Brands> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "wishlist", element: <WishList></WishList> },
            { path: "categories", element: <Categories /> },
            { path: "*", element: <NotFound></NotFound> },
          ]
      }
    ]
    , { basename: "/E-commerce-Abdelrahman-mostafa/" }
  )
  return (
    <>
      <QueryClientProvider client={QueryClients}>
        <UserContextProvider>
          <CartConTextProvider>
            <RouterProvider router={Route}>
            </RouterProvider>
          </CartConTextProvider>
        </UserContextProvider>
      </QueryClientProvider>


    </>
  )
}

