import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service.js';
import { useEffect, useState } from 'react';

// Components
import Product from '../product/product';
import Wishlist from "../wishlist/wishlist";

// Services
const http = new HttpService();

const sampleData = [
  {
    imgUrl: "https://s3-us-west-2.amazonaws.com/devslopesvideo/vault.JPG",
    likes: 0,
    price: 40.99,
    title: "Vault Boy Bobble Head",
    _id: "62ecfd787bb92633e7948a3e"
  },
  {
    imgUrl: "https://s3-us-west-2.amazonaws.com/devslopesvideo/shield.png",
    likes: 0,
    price: 129.5,
    title: "Link's Shield",
    _id: "62ecfd787bb92633e7948a3f"
  },
  {
    imgUrl: "https://s3-us-west-2.amazonaws.com/devslopesvideo/lancer.jpg",
    likes: 0,
    price: 400,
    title: "Lancer",
    _id: "62ecfd817bb92633e7948a40",
  }
]

function App() {
  const [products, setProducts] = useState(sampleData);


  // const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // useEffect(() => {
  //   http.getProducts()
  //     .then((response) => setProducts(response.data))
  //     .catch((err) => setError(err.message))
  // }, []);

  const productList = () => {
    const productList = products?.map(
      (product) =>
        < div className="col-sm-4" key={product._id} >
          <Product
            product={product}
            handleClick={handleWishlistToggle}
            //coudln't deconstruct here for whatever reason
            isOnWishlist={wishlist.find(item => product._id == item._id)}
          />
        </div >
    )
    return (productList)
  }

  const handleWishlistToggle = (event, product) => {
    event.preventDefault();
    //where does {_id} come from? deconstructored from wishlist?
    const indexOnWishlist = wishlist.findIndex(({ _id }) => product._id == _id);
    console.log(indexOnWishlist);
    if (indexOnWishlist >= 0) {
      wishlist.splice(indexOnWishlist, 1);
      setWishlist([...wishlist]);
      console.log("wishlist after remove", wishlist)
    } else {
      setWishlist([...wishlist, product]);
      //why does the latest product not show up when added to wishlist?
      console.log("wishlist after adding", wishlist);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to The Swag Shop!</h2>
      </header>
      <main className='container-fluid App-main'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='row'>
              {productList()}
            </div>

          </div>
          <div className="col-sm-4">
            <Wishlist
              wishlist={wishlist}
              handleClick={handleWishlistToggle} />
          </div>

        </div>
      </main >
    </div>
  );
}

export default App;
