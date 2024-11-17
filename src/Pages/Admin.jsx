import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import { useApiStore2 } from "@/components/stores/customHooks";
import { useEffect, useState } from "react"

const Admin = () => {
    // const [data, setData] = useState([]);
    // const { fetchApi } = useApiStore2();

    // useEffect(() => {
    //     setData(fetchApi());
    // }, [fetchApi])

    return (
        <div className="bg-primary">
            {/* Navbar Start */}
            <Navbar />
            <div className="flex justify-center">
                <div className="container">
                    <div className="text-xl text-center text-white">
                        Dashboard Admin
                    </div>

                    <div className="bg-slate-700 text-white p-10 rounded-lg mt-4">
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