import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import useAuthStore from "@/stores/authStore";
import { useEffect } from "react"
import RedirectLogin from "./RedirectLogin";

const Admin = () => {
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
            <div className="">
                <div className="grid">
                    <div className="text-xl text-center text-white">
                        Dashboard Admin
                    </div>

                    <div className="grid justify-center bg-slate-700 text-white p-10 rounded-lg mt-4">
                        <p>test</p>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div >
    )
}

export default Admin