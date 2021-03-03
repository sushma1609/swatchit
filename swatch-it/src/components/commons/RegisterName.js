import React from 'react'
//import { authenticate } from '../../services/authService'

const RegisterName = () => {

    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
        phone: '',
        city:''
        
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
                <h1 className='font-weight-bold mb-5'>Register Your <br />Account</h1>

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
                <input
                    type='phone'
                    value={credentials.phone}
                    onChange={e => setCredentials({
                        ...credentials,
                        phone: e.target.value
                    })}
                    className='form-control mb-2'
                    placeholder='Phone number'
                />
                <br />
                <br />
                <input
                    type='city'
                    value={credentials.city}
                    onChange={e => setCredentials({
                        ...credentials,
                        city: e.target.value
                    })}
                    className='form-control mb-2'
                    placeholder='City'
                />
                <button type='submit' className='btn btn-primary btn-block mt-5'>Register</button>
            </form>
        </div>
    )
}

export default RegisterName
