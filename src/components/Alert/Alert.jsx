import React from 'react'
import {MdClear} from "react-icons/md"
import "./Alert.css"
function AlertPopup({message,setMessage}) {

   

    return (
        <div className={`alert ${message && "alert_enable"}`}>
            <button className='alert-close' onClick={()=>setMessage(null)}><MdClear/></button>
            <span>{message}</span>
        </div>
    )
}

export default AlertPopup
