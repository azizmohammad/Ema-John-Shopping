import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/UserContexts';

const SingUp = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);

        if (password.length < 6) {
            setError("Password shold be 6 Characters")
            return
        }
        if (password !== confirm) {
            setError("Your PassWord Did NOt Match")
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(email, password);
                const user = result.user;
                console.log(user);
                form.reset()
                Swal.fire(
                    'Success Your Register',
                    'Thank You!',
                    'success'
                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">Sing Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem.</p>
                </div>

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Confirm Your Password" className="input input-bordered" required />
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Sing Up</button>
                        </div>
                        <label className="label text-center">
                            <p>Already Have an Account <Link to='/login' className='text-center font-semibold text-indigo-600' >Login</Link></p>
                        </label>
                        <button className="btn btn-primary w-full">Continue With Google</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SingUp;


