
import React from 'react';
import AuthLayouts from '../components/Layouts/AuthLayouts';

const LoginPage = () => {
    return (
        <div className="bg-[url('../public/img/masuk.jpg')] w-full h-screen p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <AuthLayouts type="login" tittle="Masuk" text="Selamat Datang Kembali" textButton1="Masuk" textButton2="Masuk Dengan Google" />
        </div>
    )
}

export default LoginPage