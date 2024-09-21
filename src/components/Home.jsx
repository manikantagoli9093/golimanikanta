import React from 'react'
import './Home.css'

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

import { Button } from '@mui/material';
const Home = () => {

  // const google="https://www.google.com"
  const linkedin="https://www.linkedin.com/in/manikanta-goli/"
  const github="https://github.com/manikantagoli9093"
  const resume=""
  const whatsapp="https://wa.me/918686137222"

  const handleClick=(url)=>{
    window.location.href = url;
  }
  return (
    <>
    <div className='home'>
    <div className='home-img'>
        <img alt='Manikanta Goli' src='/images/newpic.png'/>
      </div>
      <div className='home-text'>
        <div className='home-static-text'>
           Hi, 
        </div>
        <div className='home-dynamic-text'>
          I am,  Manikanta Goli !
        </div>
        <div className='home-icon-text'>
          {/* <ScreenshotMonitorIcon/> */}
            &lt;h1&gt;Frontend Developer&lt;h1&gt;
        </div>
        <div className='home-icon-text'>
         
          
          &lt;<BuildOutlinedIcon/>&gt; DevOps Engineer &lt;<BuildOutlinedIcon/>&gt;
            
        </div>
        <div className='button-list'>
          <div className='button'>
            <Button variant='outlined' onClick={()=>handleClick(linkedin)}>Linkedin</Button>
            <Button variant='outlined' onClick={()=>handleClick(github)}>Github</Button>
            <Button variant='outlined' onClick={()=>handleClick(resume)}>Resume</Button>
            <Button variant='outlined' onClick={()=>handleClick(whatsapp)}>WhatsApp</Button>
          </div>
        </div>
      </div>
      
      
    </div>
  
  </>
  )
}

export default Home
