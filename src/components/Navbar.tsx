import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SideBar';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} className='couleur-verte'/>
                </Link>
                <h1>Pilote ta voiture</h1>
                <img src="Logo.png" height="75" alt="Logo" style={{position: 'absolute', top: '4px', right: '10px'}}/>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='icone-menu'>
                            <AiIcons.AiOutlineClose className='couleur-verte'/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <br/><br/>
                    <img src="Logo.png" height="220" alt="Logo" style={{position: 'absolute', left: '15px'}}/>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;