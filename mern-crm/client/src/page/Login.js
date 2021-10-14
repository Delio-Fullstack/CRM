import React, {useState} from 'react';
import ProtoTypes from 'prop-types';
import {loginApi, sessionApi}  from 'Services/ApiServices';


const Login = ({ setToken }) => {
    const baseUrl = 'http://localhost:3002';
    const endpoint = '/api/users';
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword ] = useState('');
    const [isLoading, setLoading] = useState(false);
    // Login Function 
    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: getEmail,
            password: getPassword
        }
        console.log(data)
        setLoading(true);
        // login generate token
        const url = `${baseUrl}${endpoint}/login`;
        loginApi(url, data).then(result => {
            const token = result.access
            setLoading(false);
            //Checking if token is exist
            if(token){
                const userProfileApi = `${baseUrl}${endpoint}/profile`
                //set laoding while fetching 
                sessionApi(userProfileApi, token).then(userProfile => {
                    const {isAdmin, _id, email } = userProfile.user
                    //console.dir( userProfile );
                    const tt = {
                        token: token,
                        id: _id,
                        isAdmin: isAdmin,
                        email: email
                    }
                    setToken(tt)
                });
            }
        })
    }

    return(
        <div className="login-page">
            <div className="login-box">
            {/* /.login-logo */}
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                <span className="h3"><b>Admin</b>LTE</span>
                </div>
                <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form onSubmit={ e => handleLogin(e) }>
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email"  onChange = {e => {setEmail(e.target.value)}} />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange ={e => {setPassword(e.target.value)}} />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    {/* /.col */}
                    <div className="col-12">
                        {(isLoading)?
                                <button type="submit" className="btn btn-primary btn-block"  disabled >Signin ...</button>
                                :
                                <button type="submit" className="btn btn-primary btn-block">Sign In </button>
                        }
                    </div>
                    {/* /.col */}
                    </div>
                </form>
                {/* /.social-auth-links */}
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
            </div>
        </div> 
    );
}


//setting for token to required
Login.protoTypes = {
    setToken: ProtoTypes.func.isRequired
}
export default Login;