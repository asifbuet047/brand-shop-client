import { useState } from 'react'
import './Root.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'


function Root() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
