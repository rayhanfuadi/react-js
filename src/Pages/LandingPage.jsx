import { Button } from "@/components/ui/button"

const LandingPage = () => {
    return (
        <div className="h-screen bg-[#161622] ">
            <div className="bg-[#161622] px-[20px] py-[16px] lg:px-[130px] lg:py-[80px] w-full">
                <div className="grid lg:grid-cols-12 gap-y-5">
                    <div className="col-span-6 grid content-between h-full">
                        <h5 className="uppercase font-bold text-[12px] lg:text-[14px] text-white mb-[16px] lg:mb-[32px]">Movie Streaming Platform</h5>
                        <h2 className="text-white font-bold text-[32px] lg:text-[48px] mb-[16px] lg:mb-[32px]">Chill</h2>
                        <p className="text-white text-[16px] lg:text-[20px] leading-[140%] mb-4 lg-mb-8">
                            Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari perangkat mereka. Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan pengguna mencari film dan acara TV, dan mulai menonton secara instan. Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan menonton pengguna, membantu pengguna menemukan film dan acara TV baru yang mungkin tidak mereka temukan sebelumnya. Selain itu, Chill juga menawarkan konten orisinal, termasuk film dan acara TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya sumber yang unik dan berharga bagi pengguna.
                        </p>
                        <a href="/login">
                            <Button className="gap-3 bg-indigo-600 text-white hover:bg-indigo-700 text-[16px] lg:text-[20px] px-[28px] py-[24px] flex items-center rounded-xl">
                                Get Started
                                <img className="w-6" src="img/arrowRight.svg" alt="" />
                            </Button>
                        </a>
                    </div>
                    <div className="col-span-6 relative flex justify-end h-[470px] order-first lg:order-last ">
                        <img className="w-full object-cover object-top" src="img/landingpage2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage