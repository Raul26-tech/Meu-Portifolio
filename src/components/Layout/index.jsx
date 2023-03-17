import React from 'react';
import About from '../About';
import Works from '../Works';
import Tecnologies from '../Tecnologies';
import Projects from '../Projects';
import Footer from '../Footer';
import Home from '../Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
    Aos.init();
    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="900"
                data-aos-anchor-placement="top-center"
            >
                <Home />
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
            >
                <About />
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
            >
                <Works />
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
            >
                <Tecnologies />
            </div>
            <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
            >
                <Projects />
            </div>
            <Footer />
        </>
    );
}
