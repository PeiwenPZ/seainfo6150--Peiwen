import React from 'react';
import {useState} from 'react';
import './DropDownMenu.css';

function DropDownMenu({handlePageChange}){

    const [showMenu,setShowMenu] = useState(false);

    const menu = [{name:'checkout'},{name:'sale'}];

    const list = menu.map(item=>{
        return(
            <li key={item.name} className="global-nave-item">
                <span onClick={() => handlePageChange(`${item.name}`)}>{item.name}</span>
            </li>
        );
    });

    const showMenuClass = showMenu ? '': 'global-nav-list--hidden';

    return(
        <nav className={`gobal-nav`}>
        <button onClick={()=>setShowMenu(!showMenu)} className='global-nav-toggle'>
            Menu
        </button>
        <ul className={`global-nav-list ${showMenuClass}`}>
            {list}
        </ul>

    </nav>
    )
};

export default DropDownMenu;