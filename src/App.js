
import LoginForm from "./component/router/pages/login";
import React, { lazy, Suspense } from "react";
import { Route,Routes, HashRouter} from 'react-router-dom';
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




  return (
    <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/product/:p1" element={<Productdetail />} />
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
    );
  

}

export default App;
