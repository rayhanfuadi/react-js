
import HeroSection from "../components/Layouts/HeroSection"
import Navbar from "../components/Layouts/Navbar"
import CarouselSwiper from "../components/Layouts/CarouselSwiper";
import TopRating from "../components/Layouts/TopRating";
import FilmTranding from "@/components/Layouts/FilmTranding";
import RilisBaru from "@/components/Layouts/RilisBaru";
import Footer from "@/components/Layouts/Footer";



const HomePage = () => {

    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />

            {/* HeroSection */}
            <HeroSection />

            {/* Carousel Swipper JS */}
            <CarouselSwiper />

            {/* Top Rating */}
            <TopRating />

            {/* Film Tranding */}
            <FilmTranding />

            {/* Rilis Baru */}
            <RilisBaru />

            {/* Footer */}
            <Footer />
        </div >
    )
}

export default HomePage

