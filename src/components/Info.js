import React from 'react';
import styled from 'styled-components'
import {TransformDesktop, TransformMobile, StandOutDesktop, StandOutMobile, GraphicDesignMobile, PhotographyMobile, GraphicDesignDesktop, PhotographyDesktop} from '../assets'   
    
 const Info = () => {
    return <Wrapper>
          <div className="info info-transform">
          <img src={TransformMobile} className="mobile-image" alt="" />
          <img src={TransformDesktop} className="desktop-image"alt="" />
          <div className="info-text">
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button className="transform">Learn More</button>
          </div> 
         </div>
         <div className="info">
            <img src={StandOutMobile} className="mobile-image" alt="" />
            <img src={StandOutDesktop} className="desktop-image"alt="" />
            <div className="info-text">
               <h2> Stand out to the right audience</h2>
               <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
               <button className="stand-out">Learn More</button>
            </div>
         </div>
    
         <div className="info">
           <div className="info-content graphic">
           <h3>Graphic design</h3>
           <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>

           <div className="info-content photography ">
             <h3>Photography</h3>
             <p>Increase your credibility by getting the most stunning, high-quality photos that improve your    business image.</p>
           </div>
        </div>
    </Wrapper>       
}

     
     



const Wrapper = styled.section`
margin: 0 auto;
h2, p {
   text-align: center;  
}

.desktop-image {
   display: none;
}

.mobile-image {
   width: 100%;
   height: 100%;
}

.info-text {
   display: flex;
   flex-direction: column;
  align-items: center;
  
  h2 {
   color: var(--very-dark-desaturated-blue);
   padding-top: 3.556rem; 
   max-width: 300px;
  }
  p {
   color: var(--dark-grayish-blue); 
   max-width: 270px;
   padding-top: 1.333rem;
    }
 
   button {
      border: none;
      outline: none;
      font-family: "Fraunces";
      font-weight: 900;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      background-color: transparent;
      padding: 1.333rem 0 3.556rem;
      position: relative;
      cursor: pointer;
      
           &::before {
            content: "";
            position: absolute;
            top: 36px;
            left: -5px;
            width: 130px;
            height: 10px;
            border-radius: 50px;
            opacity: .25;
            z-index: -1;
            transition: var(--transition);
            
        }
     :hover, :focus {
        &::before {
           opacity: 1;
           
        }
     }
    
   }
     .transform {
     &::before {
            background-color: var(--yellow);
        } 
   }
       .stand-out {
     &::before {
            background-color: var(--soft-red);
    
        } 
   }
}

.info-content {
   display: flex;
   flex-direction: column;
   text-align: center;
   height: 600px;
   h3 {
      padding-top: 22.111rem;
   }
   p {
      padding-top: 1.556rem;
      max-width: 300px;
      margin: 0 auto;
   }

}

.graphic {
   background-image: url(${GraphicDesignMobile});
   background-size: cover;
   background-position: calc(50% - 0px/2) calc(50% + 0px/2);
   color: var(--dark-desaturated-cyan);
}

.photography {
   background-image: url(${PhotographyMobile});
   background-size: cover;
   background-position: calc(50% - 0px/2) calc(50% + 0px/2);
   color: var(--dark-blue);
}




@media (min-width: 875px) {
   .desktop-image {
  display: flex;
   width: 100%;
   max-height: 600px;
}

.mobile-image {
   display: none
}

.info {
  display: flex;
  align-items: center;
  
  
  img {
     width: 50%;
  }
 .info-text {
    align-items: flex-start;
    margin: 0 auto;
    h2, p {
       text-align: left;
       max-width: 400px;
    }
    p {
       max-width: 400px;
    }
    
 }
}

.info-transform {
   flex-direction: row-reverse;
   
}
  .graphic {
   background-image: url(${GraphicDesignDesktop});
   width: 50%;
}

.photography {
   background-image: url(${PhotographyDesktop});
   width: 50%;
  }
}

.info-content {
   p {
      max-width: 340px;

   }

}


`

export default Info;
