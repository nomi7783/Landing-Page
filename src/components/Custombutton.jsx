import React from 'react'

const Custombutton = (props) => {
    const {color,text} = props;
  return (

    
      <button className={color}>{text} </button>

   
  )
}

export default Custombutton