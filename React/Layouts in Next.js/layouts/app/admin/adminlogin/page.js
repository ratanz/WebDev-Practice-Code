import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login
      <p>Feel free to login as an admin</p>
    </div>
  )
}

export default page

export async function generateMetadata({ params }) {
  return {
    title: "Admin Login - Facebook",
    description: "Log in as an admin",
  }
}
