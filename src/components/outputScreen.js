import React from 'react'
import InputAndResultScreen from './inputAndResultScreen'
import '../index.css'

const OutputScreen=(props)=> {
  return (
    <div className='screen'>
      <InputAndResultScreen value={props.input}/>
      <InputAndResultScreen value={props.result}/>

    </div>
  )
}

export default OutputScreen;
