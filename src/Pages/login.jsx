
import LoginLayouts from '../components/Layouts/LoginLayouts';

const LoginPage = () => {
    return (
        <div className="bg-[url('../public/img/masuk.jpg')] w-full h-[120vh] p-0 bg-fixed bg-center bg-cover bg-no-repeat">
            <LoginLayouts type="login" tittle="Masuk" text="Selamat Datang Kembali" textButton1="Masuk" textButton2="Masuk Dengan Google" />
        </div>
    )
}

export default LoginPage