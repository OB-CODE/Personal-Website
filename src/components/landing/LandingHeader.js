import React from 'react'
import "./Landing.scss";
import Typical from 'react-typical'


const LandingHeader = () => {
  return (
    <div>
      <div className="strip"></div>

      <div className='Container'>
        <div className="heading">
          <h5>
            <Typical
            steps={['Mitchell', 1000, `Mitch O'Brien`, 1000]}
            loop={2}
            wrapper="div"
              // <h5>Mitch</h5>
              // <h5>O'Brien</h5>
            />
          </h5>
        </div>
        <h1 className='jobs'>
        <Typical
          steps={[`<01101000 01101001 />`, 400, `<Software Engineer />`, 1000]}
          loop={1}
         />
         </h1>
      </div>
    </div>
  )
}

export default LandingHeader