import React from 'react'
import { formatColor } from '../ColorMethods'

export default function ColorTag({color, text}) {
  return (
    <div className='color-tag'>
        <div style={{backgroundColor: formatColor(color), width: 25, height: 25, borderRadius: "25px"}}></div>
        <div className='color-tag-info'>
          <h3 className='color-tag-title'>{text}</h3>
          <p>{formatColor(color)}</p>
           <p>{formatColor(color)}</p>
        </div>



      </div>
  )
}
