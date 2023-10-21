import { useContext, useEffect, useState } from 'react'
import './Root.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import { AuthenticationContext } from './Contexts/AuthenticationContext'


function Root() {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user?.uid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Server is down');
        }
      })
      .then((data) => setCart(data))
      .catch((error) => console.log(error));
  }, [user]);

  return (
    <div>
      <NavigationBar cart={cart}></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
