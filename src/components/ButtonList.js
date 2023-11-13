import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttons=["All","JavaScript","React","Java","HTML","CSS","TailWind"];
  return (
    
    <div className='flex '>
      
      
    {buttons.map((button)=><Button key={button} buttonlist={button}/>)}
     
    </div>
  )
}

export default ButtonList
