import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Button } from 'antd';
import background_title from '../../../static/svg/solutions-title-background.svg';
import background_card from '../../../static/svg/solutions-card.svg';

//gsap happens
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomeSolutions = () => {
    const { strapiSolution } = useStaticQuery(query);
    const { title, subtitle, list } = strapiSolution;

    useEffect(() => {
        gsap.from('.gsap_solutions_home ', {
            duration: 1,
            y: '10',
            scale: 0.6,
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.solutions_home',
                start: 'top 50%',
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
                id="solutions"
                className="solutions d-flex-col align-items-center justify-content-center solutions_home"
            >
                <div className="solutions_content d-flex-col align-items-center justify-content-center">
                    <div className="solutions_content_title text-center">
                        <p>{title}</p>
                        <h2>{subtitle}</h2>
                        <img src={background_title} alt="" />
                    </div>
                    <div className="solutions_content_cards gap-3 d-flex-row align-items-center justify-content-center">
                        {list.map((card, i) => (
                            <div
                                key={card.id}
                                className="gsap_solutions_home solutions_content_card"
                            >
                                <div className="card_container text-center d-flex-col align-items-center justify-content-center">
                                    <img
                                        src={card.image.localFile.publicURL}
                                        alt={card.image.alternativeText}
                                    />
                                    <p>{card.title}</p>
                                    <p>{card.subtitle}</p>
                                    <img src={background_card} alt="Solution Card BG" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button type="primary">Learn More</Button>
                </div>
            </section>
        </>
    );
};

const query = graphql`
    query getSolutions {
        strapiSolution {
            title
            subtitle
            list {
                id
                subtitle
                title
                image {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;
