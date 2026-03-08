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
    name: 'BALANCE',
    svg: (colors) => (
     <svg className='illustration' width="859" height="859" viewBox="0 0 859 859" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="859" height="859" fill={formatColor(colors[0])}/>
<path d="M677 677H182V182H677V677ZM429 300C357.203 300 299 358.203 299 430C299 501.797 357.203 560 429 560C500.797 560 559 501.797 559 430C559 358.203 500.797 300 429 300Z" fill={formatColor(colors[1])}/>
<rect x="723.906" y="96" width="47.1009" height="890.175" transform="rotate(44.4977 723.906 96)" fill={formatColor(colors[2])}/>
<path d="M677 677H182V420H299.379C299.128 423.3 299 426.635 299 430C299 501.797 357.203 560 429 560C500.797 560 559 501.797 559 430C559 426.635 558.872 423.3 558.621 420H677V677Z" fill={formatColor(colors[1])}/>
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
    name: 'HOUSES',
    svg: (colors) => (
      <svg className='illustration' width="859" height="859" viewBox="0 0 859 859" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="859" height="859" fill={formatColor(colors[0])}/>
<path d="M358.8 310.732H607.193V577.001H86.4795V311.392H86L86.4795 310.828V310.732H86.5615L222.681 151L358.8 310.732Z" fill={formatColor(colors[1])}/>
<path d="M607.193 311.082L357.714 311.819L222.253 151H475.688L607.193 311.082Z" fill={formatColor(colors[2])}/>
<path d="M569.392 510.219H384V708.952H772.643V510.711H773L772.643 510.291V510.219H772.581L670.986 391L569.392 510.219Z" fill={formatColor(colors[1])}/>
<path d="M384.001 510.479L570.203 511.03L671.306 391H482.151L384.001 510.479Z" fill={formatColor(colors[2])}/>
</svg>


    )
  }, 
  {
    name: 'UI',
    svg: (colors) => (
       <svg className='illustration' width="417" height="417" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="417" height="417" fill={formatColor(colors[0])}/>
<rect x="19" y="27" width="313" height="28" fill={formatColor(colors[1])}/>
<rect x="19" y="65" width="156" height="28" fill={formatColor(colors[1])}/>
<rect x="19" y="121" width="344" height="28" fill={formatColor(colors[1])}/>
<rect x="19" y="159" width="229" height="28" fill={formatColor(colors[1])}/>
<ellipse cx="354" cy="349.5" rx="38" ry="37.5" fill={formatColor(colors[2])}/>
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
