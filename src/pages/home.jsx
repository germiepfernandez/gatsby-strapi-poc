import React from 'react';
import AppLayout from '../layout/AppLayout';
import Footer from '../layout/Footer';

import {
    HomeBanner,
    HomeSolutions,
    HomeProjects,
    HomeClients,
    HomeRoles,
    HomeFacts,
    HomeContact,
} from '../components/home';

const HomePage = () => {
    return (
        <AppLayout>
            <HomeBanner />
            <HomeSolutions />
            <HomeProjects />
            <HomeClients />
            <HomeRoles />
            <HomeFacts />
            <HomeContact />
            <Footer />
        </AppLayout>
    );
};

export default HomePage;
