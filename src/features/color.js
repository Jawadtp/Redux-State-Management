import {createSlice} from '@reduxjs/toolkit'


const initialStateValue =  ''         
    

export const themeSlice = createSlice(
    {
        name: 'theme',
        initialState: 
        {
            value: initialStateValue
            
        },
        reducers:
        {
            changeColor: (state, action) =>  //You may as well use a normal function here.
            {
                state.value = action.payload
            },

           
        }

    })

export const {changeColor} = themeSlice.actions

export default themeSlice.reducer