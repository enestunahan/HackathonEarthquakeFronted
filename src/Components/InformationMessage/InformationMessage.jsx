import React from 'react'
import './InformationMessage.css'

export default function InformationMessage(props) {
  return (
    <div  className = {`informationMessage ${props.className}`} >
        <div className='informationMessageContent'>
            <div className='informationMessageTitle'>
                <h1> {props.title} </h1>            
            </div>
            <div className='informationMessageBody'>
                 <img src={props.image} alt="" />
                 <p>{props.message}</p>
            </div>
        </div>
    </div>
  )
}
