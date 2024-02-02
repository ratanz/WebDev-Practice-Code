import React from 'react'
import Footer from './Footer'

const navbar = (props) => {
  return (
    <div>
    <div className="logo">{props.logoText}</div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default navbar
