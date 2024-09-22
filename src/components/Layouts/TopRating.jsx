import BadgeBiru from "../Elements/Badges/Badge"
import ShadcnCarousel from "../Shadcn/ShadcnCarousel"

export const TopRating = () => {

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Top Rating Film dan
                Series Hari
                ini
            </div>
            {/* <!-- start --> */}
            <ShadcnCarousel type="t" justify="start" children={<BadgeBiru />} />
        </div >
    )
}

export default TopRating