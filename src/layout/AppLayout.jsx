import React from 'react';
import Navbar from './Navbar';
import '../style/global.scss';

const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div
                // ref={scrollContainer}
                className="main_container"
            >
                {children}
            </div>
        </>
    );
};

export default AppLayout;
