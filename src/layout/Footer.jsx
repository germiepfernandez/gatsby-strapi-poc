import React from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

import sms from '../../static/svg/footer-sms.svg';
import call from '../../static/svg/footer-phone.svg';
import my_logo from '../../static/svg/logo-mini.svg';

//ROUTER
import { useDispatch } from 'react-redux';

//REDUX
import { homeContentActions } from '../redux/reducers/home.reducers';

const Footer = () => {
    const { strapiInfo } = useStaticQuery(query);
    const { companyName, companyNumber, companyEmail, companyIcon, description, socials } =
        strapiInfo;

    //redux
    const dispatch = useDispatch();

    //redux functions
    const { updateListHome } = homeContentActions;

    //functions
    const handleScrollTop = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    const handleTab = (loc) => {
        if (loc === 'home') {
            navigate('/home');
            dispatch(
                updateListHome({
                    navActive: 'home',
                }),
            );
            handleScrollTop();
        } else if (loc === 'about') {
            navigate('/about');
            dispatch(
                updateListHome({
                    navActive: 'about',
                }),
            );
            handleScrollTop();
        } else if (loc === 'solutions') {
            navigate('/solutions');
            dispatch(
                updateListHome({
                    navActive: 'solutions',
                }),
            );
            handleScrollTop();
        } else if (loc === 'careers') {
            navigate('/careers');
            dispatch(
                updateListHome({
                    navActive: 'careers',
                }),
            );
            handleScrollTop();
        }
    };

    return (
        <>
            <footer className="footer d-flex-col align-items-center justify-content-center">
                <div className="footer_container d-flex-row gap-2 justify-content-between">
                    <div className="footer_container_columnA d-flex-col gap-2">
                        <div className="brand d-flex-row gap-1 align-items-center">
                            <img
                                src={companyIcon.localFile.publicURL}
                                alt={companyIcon.alternativeText}
                            />
                            <h3>{companyName}</h3>
                        </div>
                        <p>{description}</p>
                        <p>© 2021 Zipher Solutions. All rights reserved</p>
                    </div>
                    <div className="footer_container_line"></div>
                    <div className="footer_container_columnB d-flex-col gap-2">
                        <p className="footer_title">LINKS</p>
                        <div className="navs d-flex-col">
                            <p onClick={() => handleTab('home')}>Home</p>
                            <p onClick={() => handleTab('about')}>About Us</p>
                            <p onClick={() => handleTab('solutions')}>Solutions</p>
                            <p onClick={() => handleTab('careers')}>Careers</p>
                        </div>
                    </div>
                    <div className="footer_container_line"></div>
                    <div className="footer_container_columnC d-flex-col gap-2">
                        <p className="footer_title">CONTACT US</p>
                        <div className="contact_list d-flex-col">
                            <div className="contact_list_item d-flex-row align-items-center gap-1">
                                <img src={sms} alt="sms" />
                                <p>{companyEmail}</p>
                            </div>
                            <div className="contact_list_item d-flex-row align-items-center gap-1">
                                <img src={call} alt="call" />
                                <p>{companyNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_container_line">
                        <div>
                            <div className="asigned_dev: Jehu Zubiri"></div>
                        </div>
                    </div>
                    <div className="footer_container_columnD d-flex-col gap-2">
                        <p className="footer_title">FOLLOW US</p>
                        <div className="social_list d-flex-col">
                            <div className="social_list_item d-flex-row align-items-center gap-1">
                                <FaFacebookSquare />
                                <p>Facebook</p>
                            </div>
                            <div className="social_list_item d-flex-row align-items-center gap-1">
                                <FaLinkedin />
                                <p>Linkedin</p>
                            </div>
                            <div className="social_list_item d-flex-row align-items-center gap-1">
                                <SiUpwork />
                                <p>Upwork</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_container_columnCopy mt-1 text-center d-flex-col align-items-center justify-content-center">
                        <p>© 2021 Zipher Solutions. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

const query = graphql`
    {
        strapiInfo {
            companyName
            companyNumber
            companyEmail
            companyIcon {
                alternativeText
                localFile {
                    publicURL
                }
            }
            description
            socials {
                id
                link
                name
                strapi_id
            }
        }
    }
`;
