import React from 'react'

const Button = ({buttonlist}) => {
   // console.log(buttonlist)
  return (
    <div>
      
      <div className='m-5 bg-gray-500 text-white rounded-full p-3'>{buttonlist}</div>
    </div>
  )
}

export default Button
