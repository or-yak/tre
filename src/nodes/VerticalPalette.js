import React from 'react'
import { formatColor } from '../ColorMethods'

export default function VerticalPalette({colors}) {
  return (
    <div className='vertical-palette'>
      <div style={{backgroundColor: formatColor(colors[0]), height: "60%"}}></div>
      <div style={{backgroundColor: formatColor(colors[1]), height: "30%"}}></div>
      <div style={{backgroundColor: formatColor(colors[2]), height: "10%"}}></div>
    </div>
  )
}
