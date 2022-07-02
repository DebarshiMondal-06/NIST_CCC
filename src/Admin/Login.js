import React, { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import './admin.css';
import { adminAuthContext } from './AdminContext';
import clubLogo from '../Images/club_logo.png'
import { admin_data } from '../Component/Data/memberDetails';


const Login = () => {
  const { allowAccess } = useContext(adminAuthContext);
  const [user] = useState(admin_data);
  const [loginBtn, setLoginBtn] = useState('Login With Google');



  const responseSuccess = (res) => {
    const { email } = res.profileObj;
    var findUser = user.find((item) => item.email === email);
    if (findUser) {
      allowAccess(email, findUser);
    } else {
      setLoginBtn('Try Again');
      toast.error('User Not Found!');
    }
  };
  const responseError = () => {
    setLoginBtn('Try Again');
    toast.error('Login Failed, Try Again!');
  }

  document.body.style.backgroundColor = 'MintCream';


  return <section className="login--section">
    <div className="login--container">
      <div className="login--card card shadow">
        <div className="logo">
          <img src={clubLogo} height="200" width="150" alt="logo" />
          <h4 className="mt-2">NIST CCC</h4>
        </div>
        <article style={{ textAlign: 'center', margin: '10px 0px' }}>
          <p className="login--text">Please login with your nist ID.</p>
          <GoogleLogin
            clientId="963909555098-9qda2vjm4jlucgvltgbmm435llhhh332.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick} className="btn btn-info login--btn">{loginBtn}</button>
            )}
            onSuccess={responseSuccess}
            onFailure={responseError}
          />
        </article>
        <br />
      </div>
    </div>
  </section>
}

export default Login;
