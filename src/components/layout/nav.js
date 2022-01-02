import React from 'react';
import { Link } from 'gatsby';

import logoImg from '../../images/logo.png';
import MailIcon from '../../assets/mail.svg';
import PhoneIcon from '../../assets/phone.svg';
import LocationIcon from '../../assets/location.svg';

const Nav = () => (
    <nav className='fixed w-full flex justify-between items-center px-20 py-2 bg-primary text-white z-50' style={{ boxShadow: '0 1rem 2.5rem rgba(0,0,0,0.15)' }}>
        <Link to='/'>
            <img src={logoImg} alt='LOGO' className='h-16' />
        </Link>

        <ul className='flex space-x-10 capitalize'>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/'>about</Link></li>
            <li><Link to='/#section-services'>services</Link></li>
            <li><Link to='/'>gallery</Link></li>
            <li><Link to='/apply'>contact</Link></li>
        </ul>

        <div className='flex space-x-10'>
            <a aria-label='email' href='mailto:info@citytabletennis.com'><MailIcon className='fill-current' /></a>
            <a aria-label='phone number' href='tel:9099040949'><PhoneIcon className='fill-current' /></a>
            <a aria-label='location' href='https://goo.gl/maps/paztWriHYNkMjWCE6' target='_blank' rel='noreferrer'><LocationIcon className='fill-current' /></a>
        </div>
    </nav>
);

export default Nav;