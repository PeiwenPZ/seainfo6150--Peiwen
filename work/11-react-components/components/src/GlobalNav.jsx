
import React from 'react';
import { useState } from 'react';
import TextPage from './TextPage';
import CardPage from './CardPage';
import PanelPage from './PanelPage';

function GlobalNav({handlePageChange}){


    return(
    <nav className='globalNav'>
        <li onClick={() => handlePageChange('text')}>Text Page</li>
        <li onClick={() => handlePageChange('card')}>Card Page</li>
        <li onClick={() => handlePageChange('panel')}>Panel Page</li>
        
    </nav>
    );
}
export default GlobalNav;