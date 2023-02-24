
import React from "react";
import { Home } from "./component/router/pages/Home";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { About } from "./component/router/pages/About";
import { Store } from "./component/router/pages/Store";
import RootLayout from "./component/router/pages/root";
import { Contactus } from "./component/router/pages/Contactus";
import { Productdetail } from "./component/router/pages/Productdetail";
import LoginForm from "./component/router/pages/login";



const router = createBrowserRouter([

  
  {
    path: '/',
    element: <RootLayout />,

    children: [
      {  path: '/', element: <LoginForm /> },
      { path: '/aboutus', element: <About /> },
      { path: '/Store', element: <Store /> },
      { path: '/contactus', element: <Contactus /> },
      { path: '/home', element: <Home/> },
      { path: '/Home/product/:p1', element: <Productdetail /> }
    ],
  }
]);

function App() {



  return (
    <RouterProvider router={router} />
  )

}

export default App;
