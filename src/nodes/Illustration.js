import React from 'react'
import { formatColor } from '../ColorMethods'


export default function Illustration({colors}) {
  return (
    <div className='illustration-container'>
      <svg className='illustration' width="392" height="392" viewBox="0 0 392 392" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="392" height="392" fill={formatColor(colors[0])}/>
<rect x="90" y="90" width="215" height="215" fill={formatColor(colors[1])}/>
<rect x="157" y="153" width="82" height="82" fill={formatColor(colors[2])}/>
</svg>
    <p className='illustration-name'>TARGET</p>

    </div>

  )
}
