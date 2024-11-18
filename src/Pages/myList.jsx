import Navbar from "@/components/Layouts/Navbar"
import Footer from "@/components/Layouts/Footer"
import List from "@/components/Layouts/List"
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import RedirectLogin from "./RedirectLogin";

const MyList = () => {
    const { isLoggedIn, checkSession } = useAuthStore();

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    if (!isLoggedIn) {
        return <RedirectLogin />;
    }
    return (
        <div className="bg-primary h-full">
            {/* Navbar */}
            <Navbar />
            {/* MyList */}
            <List />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MyList