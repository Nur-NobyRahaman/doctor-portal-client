import React from 'react';
import Banner from './Banner';
import './Banner.css'
import Info from './Info';
import Services from '../Services/Services';
import { Box } from '@mui/material';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import ContactField from './ContactField';
import Footer from './Footer';

const Home = () => {
    return (
        <Box  overflow={'auto'}>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactField></ContactField>
            <Footer></Footer>

        </Box>
    );
};

export default Home;