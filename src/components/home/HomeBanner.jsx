import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

//gsap happens
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const HomeBanner = () => {
    const { strapiHomeBanner } = useStaticQuery(query);
    const { banner_mobile, banner_web, button, special, subtitle, title } = strapiHomeBanner;

    useEffect(() => {
        gsap.from('.gsap_banner', {
            duration: 1,
            y: '10',
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '#banner_home',
                start: 'top 50%',
                end: 'bottom 30%',
                // markers: true,
                toggleActions: 'play',
            },
            stagger: 0.3,
        });
    }, []);

    return (
        <>
            <section
                id="banner_home"
                className="banner d-flex-col align-items-center justify-content-center"
            >
                <div className="banner_main d-flex-col align-items-center justify-content-center">
                    <p className="gsap_banner display_3 text-center">
                        {title}
                        <span className="text-orange">{special}</span>
                    </p>
                    <p className="gsap_banner text-center">{subtitle}</p>
                    <div className="gsap_banner">
                        <Button type="primary">
                            <div className="d-flex-row align-items-center gap-1-2">
                                {button}
                                <CaretRightOutlined />
                            </div>
                        </Button>
                    </div>
                </div>
                <img src={banner_web.localFile.publicURL} alt={banner_web.alternativeText} />
                <img src={banner_mobile.localFile.publicURL} alt={banner_mobile.alternativeText} />
                {/* <div className='banner_arrow'></div> */}
            </section>
        </>
    );
};

const query = graphql`
    query getHomeBannerInfo {
        strapiHomeBanner {
            banner_mobile {
                alternativeText
                localFile {
                    publicURL
                }
            }
            banner_web {
                alternativeText
                localFile {
                    publicURL
                }
            }
            button
            id
            special
            subtitle
            title
        }
    }
`;
