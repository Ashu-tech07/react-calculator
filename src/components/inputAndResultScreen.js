import React from 'react'
import '../index.css'

const InputAndResultScreen=(props)=> {
  return (
    <div className='screen-row'>
      <input type='text' readOnly value={props.value}/>
    </div>
  )
}

export default InputAndResultScreen;
