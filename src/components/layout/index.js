import React from 'react';

import Nav from './nav';
import Footer from './footer';

const Layout = props => (
    <>
        <Nav />
        {props.children}
        <Footer />
    </>
);

export default Layout;