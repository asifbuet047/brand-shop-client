import { useContext, useState } from 'react'
import './Root.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import { AuthenticationContext } from './Contexts/AuthenticationContext'


function Root() {
  const { user, signOutUser } = useContext(AuthenticationContext);
  console.log(user);

  return (
    <div className=''>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
