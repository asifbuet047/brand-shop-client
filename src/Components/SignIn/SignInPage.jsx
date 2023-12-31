import { React, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import useAxios from '../../hooks/useAxios';

function SignInPage() {
  const { user, userLoading, signInUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosHook = useAxios();

  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get('password');
    const mail = formData.get('mail');
    signInUser(mail, password)
      .then((user) => {
        const mail = user.user.email;
        const uid = user.user.uid;
        axiosHook.post('/api/v1/token', { mail, uid })
          .then((response) => {
            console.log(response);
            toast.success(`Successfully Logged In. Welcome`, {
              position: 'bottom-center',
              autoClose: 2000,
            });
          }).catch((error) => {
            console.log(error);
          })

        if (location.state === null) {
          navigate('/');
        } else {
          navigate(`${location.state}`);
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: 'bottom-center',
          autoClose: 5000,
        });
      })

  };



  return (
    <div>
      {userLoading ?
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='mail' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h1>Dont have account?</h1>
                <Link to={'/register'} state={location.state}><h1 className='text-red-600'>Register</h1></Link>
              </div>
            </form>
          </div>
        </div>
        : <span></span>
      }
      {/* <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      /> */}
    </div>
  )
}

export default SignInPage