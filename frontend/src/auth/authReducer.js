import React from 'react'
import { types } from '../types/types';



const authReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                isLoggedIn: true
            }

        case types.logout:
            return {
                isLoggedIn: false
            }
        default:
            return state;
    }

}

export default authReducer;
