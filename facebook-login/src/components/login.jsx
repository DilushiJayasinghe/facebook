import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className='login template d-flex  justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form-container p-5 rounded bg-white  '>
                <form>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" placeholder=" Enter Email" className="form-control" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Email</label>
                        <input type="password" placeholder=" Enter Password" className="form-control" />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                        <label htmlFor='check' className='custom-input-label ms-2 '>
                            Remeber me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Sign In</button>
                    </div>
                    <p className='text-end mt-2 '> 
                        Forgot <a href=''>Password?</a><a href='' className='ms-2' >Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
