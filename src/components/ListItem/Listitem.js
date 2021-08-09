import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Listitem.css'

function Listitem({value}) {
    return (
        <div className='list__item'>
            <h3>{value}</h3>
            <DeleteIcon/>
        </div>
    )
}

export default Listitem
