import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";
import RedirectLogin from "./RedirectLogin";

const ChangeService = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    useEffect(() => {
        checkSession();
    }, [checkSession]);
    if (!isLoggedIn) {
        return <RedirectLogin />;
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid justify-center ">
                <img className="w-[300px]" src="./img/404.svg" alt="" />
                <h1 className="text-[#95B1BE] text-[24px]">Sepertinya Anda Tersesat...</h1>
                <div className="group">
                    <a href="/home" className="group text-[#95B1BE] flex justify-center gap-2 mt-4 ">
                        <img className="group-text-[#95B1BE]" src="./img/arrowLeft.svg" alt="" />
                        Kembali
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ChangeService