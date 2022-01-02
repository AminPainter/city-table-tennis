import React from 'react';

import logo from '../../images/logo.png';

const FooterLink = props => (
    <li className='transition-all duration-200 capitalize hover:-rotate-6 hover:text-blue-300 hover:shadow-lg'>
        <a rel='noreferrer' className='inline-block py-2 px-6' target='_blank' href={props.to}>{props.children}</a>
    </li>
);

const Footer = () => (
    <footer className='py-8 px-32 bg-gray-800 text-white phone:px-10' id='footer'>
        <div className='text-center mb-12'>
            <img className='h-40 inline-block' src={logo} alt='LOGO' />
        </div>

        <div className='flex justify-between tab-port:flex-col tab-port:items-center tab-port:space-y-8'>
            <ul className='py-6 border-t-2 border-gray-light flex items-start space-x-12 phone:w-full phone:space-x-0 phone:justify-between' style={{ wordSpacing: '.3rem' }}>
                <FooterLink to='mailto:info@citytabletennis.com'>email</FooterLink>
                <FooterLink to='tel:9099040949'>phone</FooterLink>
                <FooterLink to='https://www.instagram.com/citytabletennis/'>instagram</FooterLink>
                <FooterLink to='https://www.instagram.com/amin_painter/'>developer contact</FooterLink>
            </ul>

            <p className='py-8 border-t-2 border-gray-light w-2/5 tab-port:text-center phone:w-full'>&copy; Copyright 2020 by City Table Tennis.</p>
        </div>
    </footer>
);

export default Footer;