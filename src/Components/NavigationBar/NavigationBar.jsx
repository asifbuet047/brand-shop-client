import React, { useContext, useRef, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext'
import { Link, NavLink } from 'react-router-dom'
import { FaQuestion, FaUserCircle } from 'react-icons/fa'
import { space } from 'postcss/lib/list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NavigationBar({ cart }) {
  console.log(cart);
  const { user, signOutUser } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    console.log("signing out");
    signOutUser().then(() => {
      toast.success(`Successfully Signing Out`, {
        position: 'bottom-right',
        autoClose: '1000',
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme: 'light'
      });
    }).catch((error) => {
      toast.error(`Signing Out Incomplete. Try later`, {
        position: 'bottom-right',
        autoClose: '2000',
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme: 'light'
      });
    });

  }
  return (
    <div className=''>
      <div className="navbar bg-base-200 flex flex-col lg:flex-row lg:justify-around lg:pr-10 lg:pt-5">
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

          {/* <div>
            <button tabIndex={3} className="btn glass"><Link to={'/mycart'}>My Cart</Link></button>
          </div> */}

          {/*shopping cart with dropdown feather*/}
          <div className="dropdown dropdown-end mr-5">
            <div className="btn btn-ghost" tabIndex={0}>
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">{cart.length}</span>
                <button type="button" className='btn glass'>My Cart</button>
              </div>
            </div>
            <div className="dropdown-content mt-3 z-[1] card card-compact w-52 bg-base-100 shadow" tabIndex={0}>
              <div className="card-body">
                <span className="font-bold text-lg">{cart.length} Items</span>
                {/* <span className="text-info">Subtotal: $999</span> */}
                <div className="card-actions">
                  <button className="btn btn-primary btn-block"><NavLink to={'/mycart'}>View Cart</NavLink></button>
                </div>
              </div>
            </div>
          </div>




          {/*avator of logged user with dropdown feather*/}
          <div className="dropdown dropdown-left ml-5">
            <div className="btn btn-ghost" tabIndex={1}>
              {
                user ?
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      {
                        user.photoURL ? <img src={user.photoURL} /> : <FaQuestion size='2em'></FaQuestion>
                      }
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  )
}

export default NavigationBar