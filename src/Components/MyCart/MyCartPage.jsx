import { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import CartProduct from './CartProduct';
import NoCartPage from './NoCartPage';
import { Navigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import useAxios from '../../hooks/useAxios';


function MyCartPage() {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState(null);
  const axiosHook = useAxios();

  useEffect(() => {
    axiosHook.get(`/cart/${user?.uid}`)
      .then((res) => { console.log(res.data); setCart(res.data) })
      .catch((error) => { console.log(error) });
  }, []);


  return (
    <div>
      {
        cart ?
          <div>
            {
              cart.length > 0 ?
                cart.map((product, index) => <CartProduct key={index} product={product}></CartProduct>)
                : <NoCartPage></NoCartPage>
            }
          </div> :
          <div className='flex flex-row justify-center h-screen items-center'>
            <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
          </div>

      }

    </div>

  )
}

export default MyCartPage