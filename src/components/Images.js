import React from 'react';
import styled from 'styled-components'
import {DesktopImages, MobileImages} from '../assets'   
    
 const Images = () => {
    return <Wrapper>
  <div class="container">
  <div class="sliding-background"> 
  </div>
  <div class="sliding-background-reverse"></div>
</div>
    </Wrapper>       
}

     
     



const Wrapper = styled.section`
.container {
  overflow: hidden;
}

.sliding-background {
  background: url(${MobileImages}) repeat-x;
  background-size: contain;
  height: 188px;
  width: 2256px;
  animation: slide 60s linear infinite;
  
}

.sliding-background-reverse {
  background: url(${MobileImages}) repeat-x;
  background-size: contain;
  height: 188px;
  width: 4512px;
  animation: slide-reverse 60s linear infinite;
  
}

@keyframes slide{
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1504px, 0, 0);
  }
}

@keyframes slide-reverse{
  0% {
    transform: translate3d(-1504px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@media (min-width: 875px) {
.sliding-background {
  background: url(${DesktopImages}) repeat-x;
  background-size: contain;
  height: 447px;
  width: 8640px;
  animation: slide 60s linear infinite;
  
}
 .sliding-background-reverse {
   display: none;
 }
}


`

export default Images;