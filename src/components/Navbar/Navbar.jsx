import { Link } from 'react-router-dom';
import './Navbar.css';
// import {Link} from 'react-scroll'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

import { faBars, faSearch, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <nav className={`zh-nav ${menuOpen ? 'active' : ''}`}>
        <input type='checkbox' id='check' checked={menuOpen} onChange={handleMenuToggle} />
        <label htmlFor='check' className='checkbtn'>
          <FontAwesomeIcon icon={faBars} />
        </label>
        <label className='logo'><a href='/'>Rob<span>Quiz</span></a></label>
        <ul className='zh-nav-elements'>
        <li><a href='/' onClick={handleMenuItemClick}>الصفحة الرئيسية</a></li>
        <li><a href='/quizzes' onClick={handleMenuItemClick}>الاختبارات</a></li>
          <li><a href='/popular' onClick={handleMenuItemClick}>اشهر الاختبارات</a></li>
          <li><a href='/category' onClick={handleMenuItemClick}>الفئات</a></li>
          
          
        </ul>
        
        <div>
          <Button variant="warning">
            <a
              href='https://robquize.lavetro-agency.com/create_survey'
              target='_b_blank'
              rel='noopener noreferrer'
              style={{ padding: '10px 20px', textDecoration: 'none', color: 'blue' }}
            >
              إنشاء إختبار
            </a>
          </Button>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;