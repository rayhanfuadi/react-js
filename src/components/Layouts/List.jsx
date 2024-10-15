import BadgeBiru from "../Elements/Badges/Badge"
import ShadcnCarousel from "../Shadcn/ShadcnCarousel"

const List = () => {
    return (
        <div className="p-5 lg:px-[80px] lg:py-[40px]">
            <div className="grid gap-8">
                <div className="flex justify-between">
                    <h1 className="text-white font-bold text-xl lg:text-[32px]">Daftar Saya</h1>
                    <p className="text-white text-[18px] hidden lg:block">Lihat Semua</p>
                </div>
                <div className="">
                    <ShadcnCarousel type="t" justify="start" children={<BadgeBiru />} />
                </div>
            </div>
        </div>
    )
}

export default List 