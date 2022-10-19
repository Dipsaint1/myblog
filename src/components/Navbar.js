import React, {useState, useEffect} from 'react';
import './styles/navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [ collapseView, setCollapseView ] = useState(false)

  useEffect(() => {

    resizeScreen();

    window.addEventListener('resize', resizeScreen);

    return () =>  window.removeEventListener('resize', resizeScreen) 

  }, []);

  const resizeScreen = () => {
    if(window.innerWidth <= 900) setMobileView(true);
    else setMobileView(false)
  }

  const handleView = () => {
    if(collapseView) setCollapseView(false);
    else setCollapseView(true);
  }  
  
  return (
    <>
      <header id="header">
        <div className="logo-wrapper">
          <span className="logo">LOGO</span>
        </div>

        { mobileView && 
          <div className="mobile-menu-wrapper">
            { <FontAwesomeIcon onClick={handleView} icon={ collapseView ? faTimes : faBars } className='icon bars' /> }
          </div>
        }
        
        <nav className={!collapseView ? 'nav-menu active' : 'nav-menu'} >
          <ul>
            <li className="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to='/about' className="nav-link" name='about'>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" name='contact'>Contact</Link>
            </li>

            <li className="nav-item">
              <Link 
                to='/blog' 
                className="nav-link" 
              >Blog</Link>
            </li>
          </ul>
        </nav>

        
        <div className={!collapseView ? 'subscribe-wrapper active-subscribe' : 'subscribe-wrapper'}>
          <button className='subscribe'>Subscribe</button>
        </div>
        
      </header>
    </>
  )
}

export default Navbar;