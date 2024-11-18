
const RedirectLogin = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid gap-6 text-white text-center justify-center">
                <p className="text-[24px]">Silahkan masuk terlebih dahulu.</p>
                <a className=" bg-primary/50 py-2 px-4 rounde-xl hover:bg-primary" href="/login">Halaman Login</a>
            </div>
        </div>
    )
}

export default RedirectLogin