import React from 'react';
import ServiceCard from './ServiceCard';
import TopBanner from './TopBanner';
import WordpressServices from './WordpressServices';
const Wordpress = () => {
    return (
        <>
            <TopBanner/>
            <WordpressServices/>
            <ServiceCard/>
        </>
    );
};

export default Wordpress;