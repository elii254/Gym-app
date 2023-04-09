import React, { useState } from 'react';
import "./Testimonials.css";
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {

    const [l, setL] = useState(0);
    const tLength = testimonialsData.length;

  return (
      <div className='Testimonials'>
          <div className="left-t">
              <span>Testimonials</span>
              <span className='stroke-text' >What They say</span>
              <span>About us</span>

              <span>
                  {testimonialsData[l].review}
              </span>

              <span>
                  <span style={{color: 'var(--orange)'}}>
                      {testimonialsData[l].name}
                  </span>{" "}
                  - {testimonialsData[l].status}
              </span>
          </div>
          <div className="right-t">
              <div></div>
              <div></div>
              <img src={testimonialsData[l].image} alt="" />

              <div className="arrows">
                  <img
                      
                      onClick={() => {
                          
                          l === 0
                              ? setL(tLength - 1)
                              : setL((prev) => prev - 1);
                      }
                    
                    }
                      
                      src={leftArrow} alt="" />
                  
                  <img
                      onClick={() => {
                          
                          l === (tLength - 1)
                              ? setL(0)
                              : setL((prev) => prev + 1);
                              
                      }}
                      
                      src={rightArrow} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Testimonials