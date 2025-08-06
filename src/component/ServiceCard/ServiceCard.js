import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'
export default function ServiceCard(props) {
  
  return (
    <Link className="col-md-6 col-lg-4" to={`/${props.url}`}>
        <div className="service-card  m-1 m-sm-3 border p-4 p-sm-5 d-flex justify-content-center align-items-center flex-column">
            {props.icon}
            <h3 className='py-2 '>{props.heading}</h3>
            <p>{props.children}</p>
        </div>
    </Link>
  )
}
