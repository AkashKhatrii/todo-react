import React, { useState } from 'react'
import './List.css'
import Listitem from '../ListItem/Listitem'

function List() {

    const [items, setItems] = useState([])
    const [value, setValue] = useState('')

    const addItem = () => {

        setItems([...items, value])
        setValue('')
    }

    const inputEnter = (e) => {
        if(e.keyCode === 13){
            addItem();
        }
    }
     return (
        <div className='list'>
        <div className='input'>
            <input type='text' name='itemName' id='inputItem' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={inputEnter}/>
            <button type='submit' onClick = {addItem} >Add</button>
        </div>

        <div className='listItems'>
            {items.map((item) => {
                return (
                    <Listitem value={item}/>
                )
            }
            )}
        </div>
            
        </div>
    )
}

export default List
