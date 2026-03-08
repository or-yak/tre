import React, { useState } from 'react'
import { formatColor, hslToHex } from '../ColorMethods'
import namer from 'color-namer';

export default function ColorTag({color, text}) {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  const copyInfo = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  return (
    <div className='color-tag'>
        <div style={{backgroundColor: formatColor(color), width: 25, height: 25, borderRadius: "25px"}}></div>
        <div className='color-tag-info-container'>
          <h3 className='color-tag-title'>{text}</h3>
          <p className='color-tag-info' onClick={() => copyInfo(formatColor(color), setCopied1)}>{copied1 ? "Copied!" : formatColor(color)}</p>
          <p className='color-tag-info' onClick={() => copyInfo(hslToHex(color), setCopied2)}>{copied2 ? "Copied!" : hslToHex(color)} </p>
          <p className='color-tag-info' onClick={() => copyInfo(namer(formatColor(color)).ntc[0].name, setCopied3)}>{copied3 ? "Copied!" : namer(formatColor(color)).ntc[0].name} </p>
        </div>
        



      </div>
  )
}
