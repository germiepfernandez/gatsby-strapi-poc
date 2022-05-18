import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

//gsap happens
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const HomeContact = () => {
    const { strapiContactUs } = useStaticQuery(query);
    const { email, title, subtitle, banner } = strapiContactUs;

    //email
    const onClick = () => {
        window.location.href = 'mailto:hello@ziphersolutions.com';
    };

    //
    useEffect(() => {
        gsap.from('.gsap_contact_home_img ', {
            duration: 1,
            y: '10',
            scale: 0.6,
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.contact_home',
                start: 'top 90%',
                end: 'bottom 30%',
                // markers: true,
                toggleActions: 'play none none reverse',
                // delay: 0.5,
            },
            stagger: 0.2,
        });
        gsap.from('.gsap_contact_home_text ', {
            duration: 1,
            y: '10',
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.contact_home',
                start: 'top 90%',
                end: 'bottom 30%',
                // markers: true,
                toggleActions: 'play none none reverse',
                // delay: 0.5,
            },
            stagger: 0.2,
        });
    }, []);

    return (
        <>
            <section
                id="contact"
                className="contact_home d-flex-col align-items-center justify-content-center"
            >
                <div className="contact_container d-flex-row align-items-center justify-content-center">
                    <div className="contact_container_text d-flex-col gap-1">
                        <h2 className="gsap_contact_home_text">{title}</h2>
                        <p className="gsap_contact_home_text">{subtitle}</p>
                        <h3 className="gsap_contact_home_text" onClick={onClick}>
                            {email}
                        </h3>
                    </div>
                    <img
                        className="gsap_contact_home_img"
                        src={banner.localFile.publicURL}
                        alt="Contact Us Hero"
                    />
                </div>
            </section>
        </>
    );
};

const query = graphql`
    {
        strapiContactUs(page: { eq: "home" }) {
            email
            title
            subtitle
            banner {
                localFile {
                    publicURL
                }
            }
        }
    }
`;
