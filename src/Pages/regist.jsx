import RegistLayouts from '@/components/Layouts/RegistLayouts';

const RegistPage = () => {
    return (
        <div className="bg-[url('../public/img/daftar.jpg')] w-full h-screen p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <RegistLayouts type="regist" tittle="Daftar" text="Selamat Datang" textButton1="Daftar Sekarang" textButton2="Daftar Dengan Google" />
        </div>
    )
}

export default RegistPage