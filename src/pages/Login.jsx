import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

  const [error, setError] = useState("")

  const { signIn }= useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user)
      navigate(`${location.state? location.state : "/"}`);
    }).catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // alert(errorCode, errorMessage);
      setError(errorCode);
    });


  };


    return (
        <div className='flex justify-center min-h-screen items-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
      <h2 className='font-semibold text-2xl text-center'>Login your account</h2>          
      <form className="card-body" onSubmit={handleLogin}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email" required />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password" required />
          <button type="submit" className="btn btn-neutral mt-4">Login</button>

          {error && <p className='text-red-500 text-center'>{error}</p>}
           <p className='text-center mt-2'>Don't Have An Account? <Link className='text-secondary' to="/auth/register">Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;