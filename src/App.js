
import React from "react";
import { Home } from "./component/router/pages/Home";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { About } from "./component/router/pages/About";
import { Store } from "./component/router/pages/Store";
import RootLayout from "./component/router/pages/root";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    
    children: [
      { path: '/', element: <Home /> },
      { path: '/aboutus', element: <About /> },
      {path:'/Store', element:<Store/>}
    ],
  }
]);

function App() {

 return (
    <RouterProvider router={router} />
)

}

export default App;
