import React, { useState } from 'react'
import { formatColor } from '../ColorMethods'

const illustrations = [
  {
    name: 'ALBERS',
    svg: (colors) => (
      <svg className='illustration' width="915" height="915" viewBox="0 0 915 915" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="915" height="915" fill={formatColor(colors[0])}/>
        <rect x="180" y="275" width="550" height="550" fill={formatColor(colors[1])}/>
        <rect x="270" y="407" width="371" height="371" fill={formatColor(colors[2])}/>
      </svg>
    )
  }, 
  {
    name: 'RIFT',
    svg: (colors) => (
     <svg className='illustration' width="859" height="859" viewBox="0 0 859 859" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="859" height="859" fill={formatColor(colors[0])}/>
<path d="M677 677H182V182H677V677ZM429 300C357.203 300 299 358.203 299 430C299 501.797 357.203 560 429 560C500.797 560 559 501.797 559 430C559 358.203 500.797 300 429 300Z" fill={formatColor(colors[2])}/>
<rect x="723.906" y="96" width="47.1009" height="890.175" transform="rotate(44.4977 723.906 96)" fill={formatColor(colors[1])}/>
<path d="M677 677H182V420H299.379C299.128 423.3 299 426.635 299 430C299 501.797 357.203 560 429 560C500.797 560 559 501.797 559 430C559 426.635 558.872 423.3 558.621 420H677V677Z" fill={formatColor(colors[2])}/>
</svg>
    )
  }, {
    name: 'SCALE',
    svg: (colors) => (
      <svg className='illustration' width="579" height="579" viewBox="0 0 579 579" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2506_233)">
<rect width="579" height="579" fill={formatColor(colors[2])}/>
<rect width="579" height="347" fill={formatColor(colors[0])}/>
<rect y="347" width="405" height="232" fill={formatColor(colors[1])}/>
</g>
<defs>
<clipPath id="clip0_2506_233">
<rect width="579" height="579" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  } , 
  {
    name: 'CHIMNEY',
    svg: (colors) => (
      <svg className='illustration' width="859" height="860" viewBox="0 0 859 860" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="859" height="859" fill={formatColor(colors[0])}/>
<rect x="170" y="340" width="107" height="393" fill={formatColor(colors[1])}/>
<path d="M320.5 25C364.102 25 400.806 54.5297 411.706 94.6807C431.808 60.1848 469.196 37 512 37C555.313 37 593.08 60.7402 613.003 95.917C627.369 89.543 643.271 86 660 86C724.065 86 776 137.935 776 202C776 266.065 724.065 318 660 318C616.686 318 578.919 294.259 558.996 259.082C544.63 265.456 528.729 269 512 269C501.175 269 490.698 267.515 480.758 264.742C467.894 293.199 439.259 313 406 313C381.292 313 359.136 302.071 344.103 284.784C325.474 331.771 279.618 365 226 365C155.86 365 99 308.14 99 238C99 167.86 155.86 111 226 111C226.125 111 226.251 111.002 226.376 111.002C230.673 62.7926 271.173 25 320.5 25Z" fill={formatColor(colors[2])}/>
<path d="M858.615 859.5H0.384766L429.5 255L858.615 859.5Z" fill={formatColor(colors[1])}/>
</svg>

    )
  }, 
  {
    name: 'EYE',
    svg: (colors) => (
       <svg className='illustration' width="417" height="417" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="417" height="417" fill={formatColor(colors[0])}/>
<path d="M210.72 106C287.778 106 357.008 144.559 404.634 205.821C356.924 270.762 285.604 312 205.913 312C128.855 312 59.6257 273.441 12 212.179C59.7095 147.238 131.029 106 210.72 106Z" fill={formatColor(colors[1])}/>
<circle cx="208" cy="209" r="56" fill={formatColor(colors[2])}/>
</svg>


    )
  }, 
]


export default function Illustration({colors}) {
  const [currentIllustration, setCurrentIllustration] = useState(0);

  const switchIllustration = () => {
    if (currentIllustration === illustrations.length - 1) {
      setCurrentIllustration(0);
    } else {
      setCurrentIllustration(currentIllustration + 1);
    }
  }

  return (
    <div className='illustration-container'>
      {illustrations[currentIllustration].svg(colors)}
      <p
        className='illustration-name'
        onClick={() => switchIllustration()}
      >
        {illustrations[currentIllustration].name}
      </p>      
    </div>
  )
}
