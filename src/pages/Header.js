import React from 'react'
import './Header.css'
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>
    
        <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>
        <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/TinderIcon-2017.svg/1200px-TinderIcon-2017.svg.png" alt="" />
        <IconButton>
        <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
  )
}

export default Header;