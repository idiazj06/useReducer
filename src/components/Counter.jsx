import React, { useReducer, useState } from 'react'
import { counterReducer, init, initialState } from '../reducers/couterReducer';
import { types } from '../types/types';


const Counter = () => {

    const [counter, dispatch] = useReducer(counterReducer, initialState, init)

    return (
        <div className="container mt-3">
            <h1>Counter: {counter} </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => {
                    dispatch({type:types.increment})
                }}
            >
                +1
            </button>

            <button
                className="btn btn-warning"
                onClick={() => {
                    dispatch({type:types.reset})
                }}
            >
                Reset
            </button>

            <button
                className="btn btn-danger"
                onClick={() => {
                    dispatch({type:types.decrement})
                }}
            >
                -1
            </button>
        </div>

    )
}

export default Counter
