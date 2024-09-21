
import HeroSection from "../components/Layouts/HeroSection"
import Navbar from "../components/Layouts/Navbar"
import CarouselSwiper from "../components/Layouts/CarouselSwiper";
import TopRating from "../components/Layouts/TopRating";



const HomePage = () => {

    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />

            {/* HeroSection */}
            <HeroSection />

            {/* Carousel Swipper JS */}
            <CarouselSwiper />

            {/* Top Rating Carousel */}
            <TopRating />

        </div>
    )
}

export default HomePage

