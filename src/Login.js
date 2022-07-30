import React from 'react';
import './Login.css';
import icon from './image/Vector 1.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="d-flex p-1 login">
            <div className="d-flex flex-column justify-content-between login-side ">
                <div className="mt-5">
                    <h2 className="text-center">GLOBETECH</h2>
                    <h2 className="text-center"> COMPANY LIMITED </h2>
                    <p className="text-center text-white mt-5">Make yourself digitalized &amp; more efficient</p>
                </div>
                <Link to="/"><div className="icon">
                    <img src={icon} alt="back" />
                </div></Link>
            </div>
            <div className="d-flex justify-content-center align-items-center login-part">

                <div className="login-box pt-5">
                    <h3 className="text-center mb-3">Welcome</h3>
                    <p className="text-center mb-2">Sign in to your account</p>
                    <input type="text" class="form-control" placeholder='email' />
                    <input type="password" class="form-control" placeholder='password' />
                    <input type="button" class="form-control" value="Submit" />
                </div>

            </div>
        </div>
    );
};

export default Login;