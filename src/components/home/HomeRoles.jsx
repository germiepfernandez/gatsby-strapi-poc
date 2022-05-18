import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

//gsap happens
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const HomeRoles = () => {
    const { strapiIot } = useStaticQuery(query);
    const { title, subtitle: subData, applist } = strapiIot;
    const { subtitle } = subData.data;
    //
    useEffect(() => {
        gsap.from('.gsap_app_home_img ', {
            duration: 1,
            y: '10',
            scale: 0.6,
            opacity: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.roles_home',
                start: 'top 60%',
                end: 'bottom 40%',
                // markers: true,
                toggleActions: 'play none none reverse',
            },
            stagger: 0.2,
        });
    }, []);

    return (
        <>
            <section className="roles d-flex-col align-items-center justify-content-center roles_home">
                <div className="roles_container  d-flex-col align-items-center justify-content-center">
                    <div className="roles_container_title text-center">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                    <div className="roles_container_cards">
                        {applist.map((card) => (
                            <div
                                key={card.id}
                                className="roles_container_cards_card d-flex-col align-items-center justify-content-center text-center"
                            >
                                <img
                                    className="gsap_app_home_img"
                                    src={card.image.localFile.publicURL}
                                    alt={card.image.alternativeText}
                                />
                                <div className="text d-flex-col">
                                    <p>{card.name}</p>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

const query = graphql`
    {
        strapiIot {
            id
            title
            subtitle {
                data {
                    id
                    subtitle
                }
            }
            applist {
                id
                name
                description
                image {
                    localFile {
                        publicURL
                    }
                    alternativeText
                }
            }
        }
    }
`;
