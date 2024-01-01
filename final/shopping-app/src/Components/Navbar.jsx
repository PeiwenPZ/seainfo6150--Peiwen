// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { useState ,useRef} from 'react';
import Modal from '../Pages/Modal';
import PersonalProfile from '../Pages/PersonalProfile';
import DropDownMenu from './DropDownMenu';



function Navbar ({ currentPage,handlePageChange}) {

    const modalRef = useRef();
    const [username,setUsername] = useState('Your name');

    
    const handleUsernameChange =(name)=>{
        setUsername(name);
    }

    return (
    <nav className="navbar">
        <div className="first-line">
        <div className="logo">
        <span onClick={() => handlePageChange('home')}>BookShop</span>
      </div>

      <div className="user-actions">
        <span >{username}</span>
        <Modal someRef={modalRef}>
          <PersonalProfile handleUsernameChange={handleUsernameChange} newUsername={username}/>
        </Modal>

        <span onClick={() => handlePageChange('cart')}>Cart</span>
      </div>

      </div>

    <DropDownMenu handlePageChange = {handlePageChange} className='dropdown'/>

      
    </nav>
  )
};

export default Navbar;
