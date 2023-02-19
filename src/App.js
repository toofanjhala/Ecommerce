import { Header } from "./component/Header";
import Cardbody from "./component/cardbody";



function App() {

  const productsArr = [

    {
      id: "m1",

      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
      id: "m2",

      title: 'Black & white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
      id: "m3",

      title: 'Yellow & Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

      id: "m4",

      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ]

  const items = productsArr.map((item) => {
    return (
      <div className="col-md-6" style={{}}>

        <Cardbody
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.imageUrl}
        >

        </Cardbody>
      </div>
    )


  })




  return (
    <div >
      <Header />
      <div className="row" style={{ margin: "0 auto" }}>{items}</div>







    </div>
  );
}

export default App;
