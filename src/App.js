import React from "react";
import Cardbody from "./component/displayitems/cardbody";
import CardProvider from "./store/CardContextprovider";
import { Header } from "./component/UI/Header";





function App() {

  const productsArr = [

    { id: "m1", title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', },

    { id: "m2", title: 'Black & white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', },

    { id: "m3", title: 'Yellow & Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', },

    { id: "m4", title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', }

  ]


  const items = productsArr.map((item) => {
    return (
      <div key={item.id} className="col-md-6" >
        <Cardbody
          id={Math.random()}
          title={item.title}
          price={item.price}
          image={item.imageUrl}
        >
        </Cardbody>
      </div>
    )


  })




  return (
    <CardProvider >
      <Header />
      <div className="row" >{items}</div>
    </CardProvider>
  );
}

export default App;
