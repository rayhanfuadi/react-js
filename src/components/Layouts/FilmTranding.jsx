import { Badge } from "lucide-react"
import ShadcnCarousel from "../Shadcn/ShadcnCarousel"
import BadgeMerah from "../Elements/Badges/BadgeMerah"

export const FilmTranding = () => {

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Film Tranding
            </div>
            {/* <!-- start --> */}
            <ShadcnCarousel type="f" justify="end" children={<BadgeMerah />} />
        </div >
    )
}

export default FilmTranding