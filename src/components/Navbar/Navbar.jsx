import React from 'react'
import "./Navbar.css"
import {MdMenu} from "react-icons/md"
import { Link } from 'react-router-dom';
function Navbar({scrolled}) {
    const [dropdown,setDropdown] = React.useState(false);
    return (
        <header className={scrolled && "scrolled"}>
        <div className='header-wrapper'>
          <Link to='/'>Fabrik</Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/upload">Upload</Link></li>
            </ul>
          </nav>
          <button className="menu-btn" onFocus={()=>setDropdown(true)} onBlur={()=>setDropdown(false)}><MdMenu/>
          <div className={`dropdown ${dropdown ? "dropdown_enable":''}`}>
              <div className='dropdown-items'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/upload">Upload</Link>
              </div>
          </div>
          </button>
        </div>
      </header>
    )
}

export default Navbar
