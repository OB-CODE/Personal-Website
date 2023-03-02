import React from 'react'
import "./Landing.scss";



const LandingHeader = () => {
  return (
    <div>
      <div className="strip"></div>

      <div className='Container'>
        <div className="landHeading"> 
          <h4>Mitch</h4>
          <h5 className='second'>O'Brien.</h5>
        </div>
        <h1 className='jobs'>
        {`<Software Engineer />`}
         </h1>
      </div>
    </div>
  )
}

export default LandingHeader