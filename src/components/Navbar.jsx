import { Button } from '@mui/material'
import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navitems'>
        <div className='navitem'>
           <Button>Home</Button>
           <Button>Work Experince</Button>
           <Button>Skills</Button>
           <Button>Education</Button>
           <Button>Projects</Button>
           <Button>Freelance</Button>
           <Button>Contact me</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
