import React, { useContext } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { space } from 'postcss/lib/list';

function NavigationBar() {
  const { user, userLoading } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    console.log("signing out");
  }
  return (
    <div className="navbar bg-base-200 justify-between">

      {/*Shop name*/}
      <div className="flex flex-row justify-center" tabIndex={0}>
        <Link to={'/'} className='text-black text-3xl'>Tech Brand Online Shop</Link>
      </div>

      <div className="flex justify-between">

        <div tabIndex={1}>
          <button className="btn glass"><Link to={'/'}>Home</Link></button>
        </div>

        <div>
          <button tabIndex={2} className="btn glass"><Link to={'/addproduct'}>Add Product</Link></button>
        </div>

        {/*shopping cart with dropdown feather*/}
        <div className="dropdown dropdown-end mr-5">
          <div className="btn btn-ghost" tabIndex={0}>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">8</span>
              <button type="button" className='btn glass'>My Cart</button>
            </div>
          </div>
          <div className="dropdown-content mt-3 z-[1] card card-compact w-52 bg-base-100 shadow" tabIndex={0}>
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block"><NavLink to={'/mycart'}>View Cart</NavLink></button>
              </div>
            </div>
          </div>
        </div>


        {/*avator of logged user with dropdown feather*/}
        <div className="dropdown dropdown-end ml-5">
          <div className="btn btn-ghost" tabIndex={1}>
            {
              user ?
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div> :
                <FaUserCircle size='2em'></FaUserCircle>
            }
          </div>
          <div className="dropdown-content mt-3 z-[1] card card-compact w-52 bg-base-100 shadow" tabIndex={1}>
            <div className="card-body">
              {
                user ?
                  <span className="font-bold text-lg card-title">{user.displayName ? user.displayName : user.email}</span> :
                  <span>No User</span>
              }
              {
                user ?
                  <div className="card-actions">
                    <button className="btn btn-secondary btn-block" onClick={handleSignOut}>Log Out</button>
                  </div> :
                  <div className="card-actions">
                    <button className="btn btn-secondary btn-block"><Link to={'/signin'}>Sign In</Link></button>
                  </div>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavigationBar