import React from 'react';
import styled from 'styled-components'
import { Emily, Jenny, Thomas } from '../assets'


const Services = () => {
    return <Wrapper>
             <h4>Client testimonials</h4>
                <div className="testimonials-center">

                 <article className="testimonial">
                     <div className="image-container">
                        <img src={Emily} alt='Emily R.' className="image"/>
                     </div>
                     <div className="testimonial-content">
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h5>Emily R.</h5>
                        <h6>Marketing Director</h6>
                   
                        </div>
                  </article>

                          <article className="testimonial">
                     <div className="image-container">
                        <img src={Thomas} alt='Thomas S.' className="image"/>
                     </div>
                     <div className="testimonial-content">
                        <p> Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                        <h5>Thomas S.</h5>
                        <h6>Chief Operating Officer</h6>
                   
                        </div>
                  </article>

                          <article className="testimonial">
                     <div className="image-container">
                        <img src={Jenny} alt='Jennie F.' className="image"/>
                     </div>
                     <div className="testimonial-content">
                        <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        <h5>Jennie F.</h5>
                        <h6>Business Owner</h6>
                   
                        </div>
                  </article>

                </div>
           
            </Wrapper>
}

const Wrapper = styled.section`
  margin: 3.556rem 0 4.778rem;
  h4 {
     padding-bottom: 3.556rem;
     
  }
  h5 {
     padding-top: 1.778rem;
  }
  h6 {
     padding-top: 0.5rem;
  }

     .testimonials-center {
       display: grid;
       row-gap: 5rem;
        }
    .testimonial {
     text-align: center;
     
      .image-container {
        position: relative;
        border-radius: 50%;
        overflow: hidden; 
        max-width: 100%;
        width: 72px;
        height: 72px;
        margin: 0 auto 1.778rem;
          .image {
             position: absolute;
             top: 0;
             left: 0;
             width: 72px;
             height: 72px;
             z-index: -1; 
               }  
      }
  
      p {
      max-width: 255px;
      margin: 0 auto;
      color: var(--very-dark-grayish-blue);
      
    }
}

@media (min-width: 875px) {
  margin: 8.889rem auto;
  max-width: 1110px;

  h5 {
     padding-top: 3.833rem;
  }
     .testimonials-center {
      grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
    }
     .testimonial {
        .image-container {
         margin: 0 auto 3.222rem;
         }
         p {
            max-width: 310px;
         }
    }
}
`

export default Services;
