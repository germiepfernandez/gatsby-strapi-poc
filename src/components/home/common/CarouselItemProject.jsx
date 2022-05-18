import React from 'react';
import { Card } from 'antd';

//
import bullet from '../../../../static/svg/projects-bullet.svg';

const CarouselItemProject = ({ name, title, banner, icon, description }) => {
    return (
        <>
            <Card bordered={false}>
                <section className="carousel_container d-flex-row align-items-center justify-content-center">
                    <div className="carousel_container_left d-flex-col gap-1">
                        <img src={icon.localFile.publicURL} alt={banner.alternativeText} />
                        <div className="title">
                            <p>{title}</p>
                            <h2>{name}</h2>
                        </div>
                        <div className="descriptions d-flex-col">
                            {description.map(({ id, content }) => (
                                <div key={id} className="d-flex-row  gap-1">
                                    <img src={bullet} alt="Bullets" />
                                    {content}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel_container_right d-flex-col align-items-center justify-content-center">
                        <img src={banner.localFile.publicURL} alt={banner.alternativeText} />
                    </div>
                </section>
            </Card>
        </>
    );
};

export default CarouselItemProject;
