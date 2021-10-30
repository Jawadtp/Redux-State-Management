import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

const Login = () => {

    const dispatch = useDispatch()

    function LoginClick()
    {
        dispatch(login( {
            name: 'Jawad',
            age: 21,
            email: 'jawadtpmohd@gmail.com'
        }))
    }

    function LogoutClick()
    {
        dispatch(logout())
    }

    return (
        <div>
            <button onClick={LoginClick}>
                Login
            </button>

            <button onClick={LogoutClick}>
                Logout
            </button>

        </div>
    )
}

export default Login
