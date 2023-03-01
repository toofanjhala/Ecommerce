
import LoginForm from "./component/router/pages/login";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import RootLayout from "./component/router/pages/root";
// import { About } from "./component/router/pages/About";
// import { Store } from "./component/router/pages/Store";
// import { Contactus } from "./component/router/pages/Contactus";
// import { Productdetail } from "./component/router/pages/Productdetail";
// import { Home } from "./component/router/pages/Home";

const Home= lazy(()=>import("./component/router/pages/Home"))
const About= lazy(()=>import("./component/router/pages/About"))
const Store= lazy(()=>import("./component/router/pages/Store"))
const Contactus= lazy(()=>import("./component/router/pages/Contactus"))
const Productdetail= lazy(()=>import("./component/router/pages/Productdetail"))


function App() {



  const router = createBrowserRouter([

  
    {
      path: '/',
      element: <RootLayout />,
  
      children: [
        {  path: '/', element: <LoginForm /> },
        { path: '/aboutus', element: <Suspense fallback={<p>Loading</p>}><About/></Suspense> },
        { path: '/Store', element: <Suspense fallback={<p>Loading</p>}><Store/></Suspense> },
        { path: '/contactus', element: <Suspense fallback={<p>Loading</p>}><Contactus/></Suspense> },
        { path: '/home', element: <Suspense fallback={<p>Loading</p>}><Home/></Suspense> },
        { path: '/Home/product/:p1', element: <Suspense fallback={<p>Loading</p>}><Productdetail/></Suspense> }
      ],
    }
  ]);


  return (
    <RouterProvider router={router} />
  )

}

export default App;
