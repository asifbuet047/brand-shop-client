import React, { useContext, useRef, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaQuestion, FaUserCircle } from 'react-icons/fa'
import { space } from 'postcss/lib/list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NavigationBar({ cart }) {
  const { user, signOutUser, setRender } = useContext(AuthenticationContext);
  const navigate = useNavigate();

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
      navigate('/');
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

  const handleDark = () => {

  }
  return (
    <div className='w-full'>
      <div className="navbar bg-base-200 flex flex-col lg:flex-row lg:justify-around lg:pt-5">
        <img src="logo.jpg" alt="Logo" srcSet="" className='w-12 h-12' />
        {/*Shop name*/}
        <div className="flex flex-row justify-center" tabIndex={0}>
          <Link to={'/'} className='text-black text-3xl font-bold'>Tech Brand Online Shop</Link>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row">

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
                <button type="button" className='btn glass'>My Cart</button>
              </div>
            </div>
            <div className="dropdown-content mt-3 z-[1] card card-compact w-52 bg-base-100 shadow" tabIndex={0}>
              <div className="card-body">
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
                    <span className="font-bold text-sm lg:text-base card-title">{user.displayName ? user.displayName : user.email}</span> :
                    <span>No User</span>
                }
                {
                  user ?
                    <div className="card-actions">
                      <button className="btn btn-secondary btn-block" onClick={handleSignOut}>Log Out</button>
                      <button className="btn btn-secondary btn-block" onClick={handleDark}>Dark</button>
                    </div>
                    :
                    <div className="card-actions">
                      <button className="btn btn-secondary btn-block"><Link to={'/signin'}>Sign In</Link></button>
                      <button className="btn btn-secondary btn-block" onClick={handleDark}>Dark</button>
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