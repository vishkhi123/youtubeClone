import React from 'react'

const Button = ({buttonlist}) => {
   // console.log(buttonlist)
  return (
    <div>
      
      <div className='px-5 p-2 m-2 bg-gray-200 rounded-lg'>{buttonlist}</div>
    </div>
  )
}

export default Button
