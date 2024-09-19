
import HeroSection from "../components/Layouts/HeroSection"
import Navbar from "../components/Layouts/Navbar"
import CarouselSwiper from "../components/Layouts/CarouselSwiper";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const HomePage = () => {
    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />

            {/* HeroSection */}
            <HeroSection />

            {/* Carousel Swipper JS */}
            <CarouselSwiper />
        </div>
    )
}

export default HomePage

