import ButtonPrimary from "../Elements/Button/ButtonPrimary"

const Service = (props) => {
    return (
        <div className="grid gap-y-5 p-6 bg-[#3D4142] rounded-xl">
            <div className="flex gap-5">
                <img className="object-contain" src="img/warning.png" alt="" />
                <div className="text-white">
                    <h2 className="text-[18px] lg:text-[20px] font-bold">Berlangganan</h2>
                    <p className="text-[14px] lg:text-[18px]">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                </div>
            </div>
            <div className="flex justify-end">
                <ButtonPrimary text="Mulai Berlangganan" />
            </div>
        </div>
    )
}

export default Service