import { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import CartProduct from './CartProduct';
import NoCartPage from './NoCartPage';
import { Navigate } from 'react-router-dom';


function MyCartPage() {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);


  return (
    <div>
      {
        cart.length > 0 ?
          cart.map((product, index) => <CartProduct key={index} product={product}></CartProduct>)
          : <NoCartPage></NoCartPage>
      }


    </div>
  )
}

export default MyCartPage