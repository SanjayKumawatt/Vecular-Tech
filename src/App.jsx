import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
// import { Home } from 'lucide-react'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import DomainRegister from './Pages/DomainRegister'
import DomainTransfer from './Pages/DomainTransfer'
import DomainPricing from './Pages/DomainPricing'
import WebsiteHosting from './Pages/WebsiteHosting'
import WordPressHosting from './Pages/WordPressHosting'
import VpsHosting from './Pages/VpsHosting'
import ManagedVpsHosting from './Pages/ManagedVpsHosting'
import DedicatedServer from './Pages/DedicatedServer'
import About from './Pages/About'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ResetPassword from './Pages/ResetPassword'
import Contact from './Pages/Contact'
import RegisterCom from './Components/RegisterCom'
import RegisterNet from './Components/RegisterNet'
import RegisterOrg from './Pages/RegisterOrg'
import RegisterIn from './Pages/RegisterIn'
import VpsOrder from './Pages/VpsOrder'
import OrderManagedVpsS from './Pages/OrderManagedVpsS'
import OrderManagedVpsM from './Pages/OrderManagedVpsM'
import OrderManagedVpsL from './Pages/OrderManagedVpsL'
import OrderPro from './Pages/OrderPro'
import OrderPlus from './Pages/OrderPlus'
import OrderBasic from './Components/OrderBasic'
import TermsOfService from './Pages/TermsOfService'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import RefundPolicy from './Pages/RefundPolicy'
import Checkout from './Pages/Checkout'
// import { Contact } from 'lucide-react'

import { CartProvider } from './context/CartContext'


const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/domains/register",
          element: <DomainRegister />
        },
        {
          path: "/domains/transfer",
          element: <DomainTransfer />
        },
        {
          path: "/domains/pricing",
          element: <DomainPricing />
        },
        {
          path: "/hosting/website",
          element: <WebsiteHosting />
        },
        {
          path: "/hosting/wordpress",
          element: <WordPressHosting />
        },
        {
          path: "/hosting/vps",
          element: <VpsHosting />
        },
        {
          path: "/hosting/managed-vps",
          element: <ManagedVpsHosting />
        },
        {
          path: "/hosting/dedicated",
          element: <DedicatedServer />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/domains/register/com",
          element: <RegisterCom />
        },
        {
          path: "/domains/register/net",
          element: <RegisterNet />
        },
        {
          path: "/domains/register/org",
          element: <RegisterOrg />
        },
        {
          path: "/domains/register/in",
          element: <RegisterIn />
        },
        {
          path: "/order/managed-vps-s",
          element: <OrderManagedVpsS />
        },
        {
          path: "/order/managed-vps-m",
          element: <OrderManagedVpsM />
        },
        {
          path: "/order/managed-vps-l",
          element: <OrderManagedVpsL />
        },
        {
          path: "/order/pro",
          element: <OrderPro />
        },
        {
          path: "/order/plus",
          element: <OrderPlus />
        },
        {
          path: "/order/basic",
          element: <OrderBasic />
        },
        {
          path: "/order/:planId",
          element: <VpsOrder />
        },
        {
          path: "/legal/terms",
          element: <TermsOfService />
        },
        {
          path: "/legal/privacy",
          element: <PrivacyPolicy />
        },
        {
          path: "/legal/refund",
          element: <RefundPolicy />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/reset-password",
      element: <ResetPassword />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },

  ])


  return (
    <div>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </div>
  )
}

export default App