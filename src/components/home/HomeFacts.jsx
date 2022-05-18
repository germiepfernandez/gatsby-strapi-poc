import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { sampleSize } from 'lodash';

import img_bga from '../../../static/svg/build-bground-left.svg';
import img_bgb from '../../../static/svg/build-bground-right.svg';

//gsap happens
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const HomeFacts = () => {
    const { allStrapiFact } = useStaticQuery(query);
    const { nodes } = allStrapiFact;
    const [fact] = sampleSize(nodes);

    //
    useEffect(() => {
        gsap.from('.gsap_facts_home_img ', {
            duration: 1,
            y: '10',
            scale: 0.6,
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.facts_home',
                start: 'top 85%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse',
            },
            stagger: 0.2,
        });
        gsap.from('.gsap_facts_text ', {
            duration: 1,
            y: '10',
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.facts_home',
                start: 'top 85%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse',
            },
            stagger: 0.2,
        });
    }, []);

    return (
        <>
            <section className="facts d-flex-col align-items-center justify-content-center facts_home">
                <div className="facts_container d-flex-row align-items-center justify-content-center gap-5">
                    <img
                        className="gsap_facts_home_img"
                        src={fact.banner.localFile.publicURL}
                        alt={fact.banner.alternativeText}
                    />
                    <div className="facts_container_text d-flex-col">
                        <h2 className="gsap_facts_text">{fact.title}</h2>
                        <p className="gsap_facts_text">{fact.description}</p>
                    </div>
                </div>
                <div className="facts_bground d-flex-row align-items-center justify-content-between">
                    <img src={img_bga} alt="Card Background" />
                    <img src={img_bgb} alt="Card Background" />
                </div>
            </section>
        </>
    );
};

const query = graphql`
    {
        allStrapiFact {
            nodes {
                id
                title
                description
                banner {
                    alternativeText
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;
