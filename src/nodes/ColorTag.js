import React from 'react'
import { formatColor, hslToHex } from '../ColorMethods'
import namer from 'color-namer';

export default function ColorTag({color, text}) {
  return (
    <div className='color-tag'>
        <div style={{backgroundColor: formatColor(color), width: 25, height: 25, borderRadius: "25px"}}></div>
        <div className='color-tag-info'>
          <h3 className='color-tag-title'>{text}</h3>
          <p>{formatColor(color)}</p>
          <p>{hslToHex(color)}</p>
          <p>{namer(formatColor(color)).ntc[0].name}</p>
        </div>



      </div>
  )
}
