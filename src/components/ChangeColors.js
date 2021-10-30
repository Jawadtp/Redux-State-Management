import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/color'

const ChangeColors = () => 
{

    const [color, setColor] = useState('')
    const dispatch = useDispatch()

    function onColorChangeClick()
    {
        console.log('Color changed')
        dispatch(changeColor(color))
    }
    return (
        <div style={{margin: 20}}>
            <input type='text' onChange={(event)=> 
                {
                    setColor(event.target.value)
                }}/>

            <button onClick={onColorChangeClick}>Change Color</button>
        </div>
    )
}

export default ChangeColors
