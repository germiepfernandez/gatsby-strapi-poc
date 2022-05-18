import React from 'react';
import { Card } from 'antd';

const CarouselItem = (data) => {
    const { data: initData } = data;
    const { title, desc, hero } = initData;

    return (
        <>
            <Card bordered={false}>
                <section className="carousel_container d-flex-row align-items-center justify-content-center">
                    <div className="carousel_container_left d-flex-col gap-1">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="carousel_container_right d-flex-col align-items-center justify-content-center">
                        <img src={hero} alt="Banner One" />
                    </div>
                </section>
            </Card>
        </>
    );
};

export default CarouselItem;
