import React, { useReducer } from 'react';
import { login, logout } from '../actions/counterAction';
import { authReducer, initialState } from '../reducers/authReducer';



export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)
    
    
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <span>{state.name}</span>
            <hr />
            <button 
                className="btn btn-primary" 
                onClick={()=>dispatch(login('12345', 'Ilan Diaz'))}
            >
                Login
            </button>
        </div>
    )
}
