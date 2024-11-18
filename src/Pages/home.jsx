
import HeroSection from "../components/Layouts/HeroSection"
import Navbar from "../components/Layouts/Navbar"
import CarouselSwiper from "../components/Layouts/CarouselSwiper";
import TopRating from "../components/Layouts/TopRating";
import FilmTranding from "@/components/Layouts/FilmTranding";
import RilisBaru from "@/components/Layouts/RilisBaru";
import Footer from "@/components/Layouts/Footer";
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import RedirectLogin from "./RedirectLogin";

const HomePage = () => {
    const { isLoggedIn, checkSession } = useAuthStore();

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    if (!isLoggedIn) {
        return <RedirectLogin />;
    }

    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />

            {/* HeroSection */}
            <HeroSection hero="hero2.png" />

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

