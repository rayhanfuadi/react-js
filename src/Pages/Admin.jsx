import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react"
import RedirectLogin from "./RedirectLogin";
import { getTopRating } from "@/services/topFilm.services";

const Admin = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    useEffect(() => {
        checkSession();
    }, [checkSession]);
    if (!isLoggedIn) {
        return <RedirectLogin />;
    }

    const [productsRating, setProductsRating] = useState([]);

    useEffect(() => {
        getTopRating((data) => {
            setProductsRating(data)
        })
    }, [])

    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />
            <div className="container lg:container">
                <div className="grid">
                    <div className="text-xl text-center text-white">
                        Dashboard Admin
                    </div>

                    <div className="grid justify-center bg-slate-700 text-white p-10 rounded-lg mt-4">
                        <p>test</p>
                        {productsRating.map((item) => (
                            <div key={item.id}>
                                <p>{item.tittle}</p>
                                <p>{item.img}</p>
                                <p>{item.badge}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div >
    )
}

export default Admin