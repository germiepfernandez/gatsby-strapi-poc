import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import img_bga from '../../../static/svg/roles-bground-left.svg';
import img_bgb from '../../../static/svg/roles-bground-right.svg';

//gsap happens
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const HomeClients = () => {
    const { strapiClient } = useStaticQuery(query);
    const { title, subtitle, description, clients } = strapiClient;

    useEffect(() => {
        gsap.from('.gsap_clients_home_img', {
            duration: 1,
            y: '10',
            scale: 0.3,
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.clients_home',
                start: 'top 70%',
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
            <section className="clients d-flex-col align-items-center justify-content-center clients_home">
                <div className="clients_container d-flex-col align-items-center justify-content-center gap-4">
                    <div className="clients_container_title text-center">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <p className="clients_container_subtitle text-center">{description}</p>
                    <div className="clients_container_brands d-flex-row align-items-center justify-content-center">
                        {clients.map((brand) => (
                            <img
                                className="gsap_clients_home_img"
                                key={brand.id}
                                src={brand.icon.localFile.publicURL}
                                alt={brand.icon.alternativeText}
                            />
                        ))}
                    </div>
                </div>
                <div className="clients_bground d-flex-row align-items-center justify-content-between">
                    <img src={img_bga} alt="Card Background" />
                    <img src={img_bgb} alt="Card Background" />
                </div>
            </section>
        </>
    );
};

const query = graphql`
    {
        strapiClient {
            clients {
                id
                icon {
                    alternativeText
                    localFile {
                        publicURL
                    }
                }
            }
            id
            description
            subtitle
            title
        }
    }
`;
