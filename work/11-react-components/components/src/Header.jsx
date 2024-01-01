import React from "react";
import './Header.css';
import GlobalNav from './GlobalNav';


function Header({handlePageChange}){
    return(
        <>
        <header className="header">
            <img src='public/vite.svg' alt="Panel Image is React logo" className='PanelImg'/>
            <h1>This is our header</h1>
        </header>
        <GlobalNav handlePageChange={handlePageChange} />
        </>

    );

}
export default Header;
