
import React from 'react';
import AuthLayouts from '../components/Layouts/AuthLayouts';

const LoginPage = () => {
    return (
        <div className="bg-[url('../public/img/masuk.jpg')] w-full h-screen p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <AuthLayouts tittle="Masuk" text="Selamat Datang" />
        </div>
    )
}

export default LoginPage