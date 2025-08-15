import React, { useContext } from 'react';
import { Link } from 'react-router'; // FIX: use react-router-dom for Link
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser ,setUser } = useContext(AuthContext); // FIX: useContext instead of use

    const handleRegister = (e) => {
        e.preventDefault(); // Prevent form reload
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then((result) => {
           const user = result.user;
           //    console.log(user);
           setUser(user);
        })
        .catch((error) => {
           const errorcode = error.code;
           const errorMessage = error.message;
           console.error(errorMessage);
           alert(errorMessage);
        });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form className="card-body" onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" name="name" required/>
                        
                        <label className="label">Photo URI</label>
                        <input type="text" className="input" placeholder="Photo URI" name="photo" required/>

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" required/>

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" required/>

                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center mt-2'>
                            Already Have An Account? <Link className='text-secondary' to="/auth/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;