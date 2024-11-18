import RegistLayouts from '@/components/Layouts/RegistLayouts';

const RegistPage = () => {
    return (
        <div className="bg-[url('../public/img/daftar.jpg')] w-full h-[130vh] p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <RegistLayouts type="regist" tittle="Daftar" text="Selamat Datang" />
        </div>
    )
}

export default RegistPage