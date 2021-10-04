import React, {useState} from 'react';
import ProtoTypes from 'prop-types';

const Login = ({ setToken }) => {
    const baseUrl = 'http://localhost:8000';
    const endpoint = '/api/users';
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword ] = useState('');
    const [isLoading, setLoading] = useState(true);

    const loginApi = async (url = '', data = {}) => {
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }catch(e){
            console.log(`connection failed ${e}`);
        }
    }
    //Login Function 
    const url = `${baseUrl}${endpoint}/login`;
    const login = (e) => {
        e.preventDefault();
        const data = {
            email: getEmail,
            password: getPassword
        }
        console.log(data)
        //login generate token
        loginApi(url, data).then(token => {
            console.log(token);

            //Checking if token is exist
            if(token.access){
                //store the token to localstorage 
                //localStorage.setItem("token", token.access);
            
                //get the profile information 
                const userProfileApi = `${baseUrl}${endpoint}/profile`
                const sessionProfile = async (url) => {
                    try{
                        const response = await fetch(url, {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${token.access}`
                            }
                        });
                        return response.json()
                    }catch(e){
                        console.log(`semething went wrong ${e}`);
                    }
                }
                //set laoding while fetching 
                setLoading(true);
                sessionProfile(userProfileApi).then(userProfile => {
                    const {isAdmin, id, email } = userProfile.user
                    console.dir( userProfile )
                 //   setToken({
                     ////   token: token.access,
                      //  isAdmin: isAdmin,
                      //  id: id,
                      //  email: email
                   // })
             
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
                <form onSubmit={ e => login(e) }>
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
                                <button type="submit" className="btn btn-primary btn-block" >Sign In</button>
                            :

                                <button type="submit" className="btn btn-primary btn-block" disabled >Sign In .. </button>
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