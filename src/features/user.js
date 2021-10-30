import {createSlice} from '@reduxjs/toolkit'


const initialStateValue =             
    {
        name: '',
        age: 0,
        email: ''
    }

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: 
        {
            value: initialStateValue
            
        },
        reducers:
        {
            login: (state, action) =>  //You may as well use a normal function here.
            {
                state.value = action.payload
            },

            logout: (state, action) =>
            {
                state.value = initialStateValue
            }
        }

    })

export const {login, logout} = userSlice.actions

export default userSlice.reducer