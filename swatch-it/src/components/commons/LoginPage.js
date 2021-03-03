import React from 'react'
//import { authenticate } from '../../services/authService'

const LoginPage = () => {

    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {
        console.log('Form Data', credentials)

        
        
         
    }
    return (
        <div className='container-fluid'>
            <form onSubmit={ e => {
                e.preventDefault();
                handleLogin()
            }} className='border p-4 login-form mx-auto mt-5'>
                <h1 className='font-weight-bold mb-5'>Login Your <br />Account</h1>

                <input
                    type='email'
                    value={credentials.email}
                    onChange={e => setCredentials({
                        ...credentials,
                        email: e.target.value
                    })}
                    className='form-control mb-2'
                    placeholder='Email'
                />
                <br />
                <br />
                <input
                    type='password'
                    value={credentials.password}
                    onChange={e => setCredentials({
                        ...credentials,
                        password: e.target.value
                    })}
                    className='form-control mb-2'
                    placeholder='Password'
                />
                <br />
                <br />
                <button type='submit' className='btn btn-primary btn-block mt-5'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
