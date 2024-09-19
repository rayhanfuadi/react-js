import React from 'react';
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegistPage = () => {
    return (
        <div className="bg-[url('../public/img/daftar.jpg')] w-full h-screen p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <AuthLayouts type="regist" tittle="Daftar" text="Selamat Datang" textButton1="Daftar Sekarang" textButton2="Daftar Dengan Google" />
        </div>
    )
}

export default RegistPage