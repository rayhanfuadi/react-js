import Services from "../Fragments/Services"

const PaymentLayout = () => {
    return (
        <div className="grid gap-[20px] lg:gap-[40px] p-5 lg:px-[80px] lg:py-[40px]">
            <h1 className="text-white text-[18px] lg:text-[32px] font-semibold">Ringkasan Pembayaran</h1>
            <div className="grid lg:flex gap-[20px] lg:gap-[40px]">
                <div className="-fit h-fit">
                    <Services packet="Berdua" price="Mulai dari Rp79,990/bulan" account="2 Akun" quality="Kualitas 1080p" />
                </div>
                {/* Payment Method */}
                <div className="grid w-full h-fit gap-[8px] lg:gap-[16px] px-[12px] lg:px-[24px]">
                    <div className="grid gap-[8px] lg:gap-[16px]">
                        <h2 className="text-white font-semibold text-[16px] lg:text-[18px]">Metode Pembayaran</h2>
                        <div className="grid lg:flex gap-[12px] lg:gap-[16px] w-full h-fit">
                            <div className="flex w-full items-center gap-1 lg:gap-2 px-[8px] lg:px-[10px] py-[4px] lg:py-[8px] border border-[#E0E0E0] rounded-[6px]">
                                <input className="p-0 m-0" type="radio" />
                                <img src="../img/visa.svg" alt="" />
                                <img src="../img/mastercard.svg" alt="" />
                                <img src="../img/jcb.svg" alt="" />
                                <img src="../img/american_express.svg" alt="" />
                                <p className="text-white w-full">Kartu Debit/Kredit</p>
                            </div>
                            <div className="flex w-full items-center gap-1 lg:gap-2 px-[8px] lg:px-[10px] py-[4px] lg:py-[8px] border border-[#E0E0E0] rounded-[6px]">
                                <input className="p-0 m-0" type="radio" />
                                <img src="../img/bca.svg" alt="" />
                                <p className="text-white w-full">BCA Virtual Account</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-[8px] lg:gap-[16px]">
                        <h2 className="text-white font-semibold text-[16px] lg:text-[18px]">Metode Pembayaran</h2>
                        <div className="flex gap-[8px] lg:gap-[16px]">
                            <div className="flex w-full items-center gap-1 lg:gap-2 px-[8px] lg:px-[10px] py-[4px] lg:py-[8px] border border-[#E0E0E0] rounded-[6px]">
                                Masukan Kode Vouhcer
                            </div>
                            <button className="bg-[#2F3334] text-white text-[12px] lg:text-[16px] px-[14px] lg:px-[28px] py-[8px] lg:py-[12px] rounded-full">Gunakan</button>
                        </div>
                    </div>
                    <div className="grid gap-[8px] lg:gap-[16px]">
                        <h2 className="text-white font-semibold text-[16px] lg:text-[18px]">Ringkasan Transaksi</h2>
                        <div className="grid gap-1 lg:gap-2">
                            <div className="flex justify-between">
                                <p>Paket Premium Individual</p>
                                <p className="text-white">Rp. 49.990</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Paket Premium Individual</p>
                                <p className="text-white">Rp. 3,000</p>
                            </div>
                            <div className="flex justify-between font-semibold text-[18px]">
                                <p>Total Pembayaran</p>
                                <p className="text-white">Rp. 52,000</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-[#09147A] w-fit text-white text-[14px] lg:text-[16px] px-[16px] lg:px-[32px] py-[8px] lg:py-[12px] rounded-full">Bayar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentLayout