import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Listitem.css'

function Listitem({value, index, deleteItem}) {
    return (
        <div className='list__item'>
            <h3>{value}</h3>
            <button type='submit' onClick={() => deleteItem(index)}><DeleteIcon /></button>
        </div>
    )
}

export default Listitem
