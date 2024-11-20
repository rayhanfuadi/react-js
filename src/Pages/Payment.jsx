import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import PaymentLayout from "@/components/Layouts/PaymentLayout"
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import RedirectLogin from "./RedirectLogin";

const Payment = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    useEffect(() => {
        checkSession();
    }, [checkSession]);

    if (!isLoggedIn) {
        return <RedirectLogin />;
    }
    return (
        <div className="bg-primary">
            <Navbar />

            <PaymentLayout />

            <Footer />
        </div>
    )
}

export default Payment