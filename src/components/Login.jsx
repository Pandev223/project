import React from 'react'
import './login.css'



function Login() {

  return (
    <section className='LoginSection'>
        <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <form  >
                <div className="textbox">
                    <input type="text" placeholder="Username" name="username" required/>
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" name="password" required/>
                </div>
                <div className="remember-me">
                    <input type="checkbox" id="remember"/> 
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="footer-links">
                <a href="#">Forgot Password?</a> | 
                <a href="#">Create an Account</a>
                </div>
            </form>
        </div>
    </div>
    </section>
  )
}

export default Login
