import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("welcome to contact page);`}
        </Script>
      contact
    </div>
  )
}

export default contact


export const metadata = {
    title: "Contact with Facebook - Connect with the world",
    description: "Contact with facebook!",
  };
