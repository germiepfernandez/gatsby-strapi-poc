import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from 'gatsby';

//
import logo from '../../static/images/logo_zipher.png';
import { HiMenu } from 'react-icons/hi';
import { CgCloseO } from 'react-icons/cg';
import { Tabs } from 'antd';

//REDUX
import { homeContentActions } from '../redux/reducers/home.reducers';

const Navbar = () => {
    //redux
    const dispatch = useDispatch();

    //redux functions
    const { updateListHome } = homeContentActions;

    //::
    const { navActive } = useSelector((state) => state.homeContents);

    //pluggins
    const { TabPane } = Tabs;

    //states
    const [isBurgerClicked, setIsBurgerClicked] = useState(false);
    const handleClick = () => setIsBurgerClicked(!isBurgerClicked);
    const [target, setTarget] = useState('');

    //header shadow
    const navScroll = () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', navScroll);
        return () => {
            window.removeEventListener('scroll', navScroll);
        };
    }, []);

    //functions
    const handleScrollTop = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    //scroll target
    useEffect(() => {
        if (target) {
            const location = document.querySelector(target);
            //   console.log(location);
            if (location)
                window.scrollTo({
                    top: location.offsetTop - 70,
                });
        }
    }, [target]);

    useEffect(() => {
        localStorage.setItem('activeNav', navActive);
    }, [navActive]);

    const handleScrollTarget = (e) => {
        // e.preventDefault();
        setIsBurgerClicked(false);
        if (target === e.target.getAttribute('href')) {
            const location = document.querySelector(target);
            if (location)
                window.scrollTo({
                    top: location.offsetTop - 70,
                });
        }
        setTarget(e.target.getAttribute('href'));
    };

    const handleHome = () => {
        setIsBurgerClicked(false);
        handleScrollTop();
        navigate('/home');
        dispatch(
            updateListHome({
                navActive: 'home',
            }),
        );
    };

    const handleAbout = () => {
        setIsBurgerClicked(false);
        handleScrollTop();
        navigate('/about');
        dispatch(
            updateListHome({
                navActive: 'about',
            }),
        );
    };

    const handleSolutions = () => {
        setIsBurgerClicked(false);
        handleScrollTop();
        navigate('/solutions');
        dispatch(
            updateListHome({
                navActive: 'solutions',
            }),
        );
    };

    const handleCareers = () => {
        setIsBurgerClicked(false);
        handleScrollTop();
        navigate('/careers');
        dispatch(
            updateListHome({
                navActive: 'careers',
            }),
        );
    };

    const tabOnChange = (key) => {
        if (key === 'home') {
            handleHome();
        } else if (key === 'about') {
            handleAbout();
        } else if (key === 'solutions') {
            handleSolutions();
        } else if (key === 'careers') {
            handleCareers();
        }
    };

    return (
        <>
            <header
                className={`navbar d-flex-row justify-content-center align-items-center ${
                    isBurgerClicked ? 'navbarexpanded' : ''
                }`}
            >
                <div className="navbar_content d-flex-row justify-content-between align-items-center">
                    <div
                        onClick={handleScrollTop}
                        className="navbar_content_left d-flex-row align-items-center"
                    >
                        <img src={logo} alt="SQREEM Technologies Logo" />
                        <p>Zipher Solutions</p>
                    </div>
                    <div className="navbar_content_center d-flex-row align-items-center justify-content-center gap-2">
                        <Tabs
                            defaultActiveKey={localStorage.activeNav}
                            onChange={tabOnChange}
                            // activeKey={navActive}
                        >
                            <TabPane tab="Home" key="home"></TabPane>
                            <TabPane tab="About Us" key="about"></TabPane>
                            <TabPane tab="Solutions" key="solutions"></TabPane>
                            <TabPane tab="Careers" key="careers"></TabPane>
                        </Tabs>
                    </div>
                    <div className="navbar_content_right d-flex-row align-items-center gap-1">
                        <p href="#contact" onClick={handleScrollTarget}>
                            Contact Us
                        </p>
                    </div>
                    <div className="navbar_content_menu">
                        <div className="d-flex-row align-items-center">
                            {isBurgerClicked ? (
                                <CgCloseO onClick={() => handleClick()} />
                            ) : (
                                <HiMenu onClick={() => handleClick()} />
                            )}
                        </div>
                    </div>
                </div>
                {/* MOBILE LINKS */}
                <ul className={isBurgerClicked ? 'nav_menu active' : 'nav_menu'}>
                    <li className="nav_menu_item" onClick={handleHome}>
                        Home
                    </li>
                    <li className="nav_menu_item" onClick={handleAbout}>
                        About Us
                    </li>
                    <li className="nav_menu_item" onClick={handleSolutions}>
                        Solutions
                    </li>
                    <li className="nav_menu_item" onClick={handleCareers}>
                        Careers
                    </li>
                    <li className="nav_menu_item" href="#contact" onClick={handleScrollTarget}>
                        Contact Us
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Navbar;
