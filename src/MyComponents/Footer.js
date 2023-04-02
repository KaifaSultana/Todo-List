import React from 'react'

export const Footer = () => {
  let footerStyle ={
    position:"relative",
    width: "100%",
    top:"95vh"
  }
  return (
    <footer className='text-light bg-dark py-3' style={footerStyle}>
      <p className="text-center">
        CopyRight &copy; MyTodoList.com
      </p>
    </footer>
  )
}
