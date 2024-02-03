import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='card' style={{ overflow: 'hidden' }}>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" width={312} style={{ borderRadius: "10px" }} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
