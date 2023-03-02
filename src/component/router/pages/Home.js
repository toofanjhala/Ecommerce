
import React ,{useEffect}from "react";

import Cardbody from "../../displayitems/cardbody";
import Footer from "../../UI/Footer"
import Header from "../../UI/Header";
import CardProvider from "../../../store/CardContextprovider";
import { Heading } from "../../UI/heading";
import Notification from "../../UI/Notification";
import { useSelector,useDispatch } from "react-redux";
import { fetchCartData,sendCartData } from "../../../store/Cart-Actions";


let isInitial = true;



const Home = () => {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.Cart.notification);
  const Item = useSelector((state) => state.Item)
   
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    console.log(Item.changed)
    if (Item.changed) {
      dispatch(sendCartData(Item));
    }
  }, [Item, dispatch]);

 
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )} 
      <Header/>
       <Heading/>
        <div className="row" >{items}</div>
        <Footer/>
      </CardProvider>
  )
}
export default Home