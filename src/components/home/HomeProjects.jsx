import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel, { autoplayPlugin, slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

//subcomponents
import CarouselItemProject from './common/CarouselItemProject';

const DEFAULT_BREAKPOINTS = [
    'centered',
    'infinite',
    'arrows',
    {
        resolve: slidesToShowPlugin,
        options: {
            numberOfSlides: 1,
        },
    },
    {
        resolve: autoplayPlugin,
        options: {
            interval: 3000,
        },
    },
];

export const HomeProjects = () => {
    const { allStrapiProject } = useStaticQuery(query);
    const { nodes: projectList } = allStrapiProject;

    console.log(projectList);
    //states
    const [itemValue, setItemValue] = useState(0);

    const carouselOnChange = (value) => {
        setItemValue(value);
    };

    return (
        <>
            <section className="project d-flex-col align-items center jutify-content-center">
                <div className="project_carousel">
                    <Carousel
                        arrows
                        infinite
                        value={itemValue}
                        onChange={(value) => carouselOnChange(value)}
                        plugins={DEFAULT_BREAKPOINTS}
                        animationSpeed={1000}
                    >
                        {projectList.map((data) => (
                            <CarouselItemProject key={data.id} {...data} />
                        ))}
                    </Carousel>
                    <Dots
                        number={3}
                        value={itemValue}
                        onChange={(value) => carouselOnChange(value)}
                    />
                </div>
            </section>
        </>
    );
};

const query = graphql`
    {
        allStrapiProject {
            nodes {
                id
                name
                title
                banner {
                    localFile {
                        publicURL
                    }
                }
                icon {
                    localFile {
                        publicURL
                    }
                }
                description {
                    content
                    id
                }
            }
        }
    }
`;
