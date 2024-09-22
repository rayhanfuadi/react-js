import BadgeBiru from "../Elements/Badges/Badge"
import TopRatingCard from "../Fragments/TopRatingCard"

export const TopRating = () => {

    return (
        <div className="p-[20px] lg:py-[40px] lg:px-[80px] bg-primary">
            <div className="font-semibold text-white text-[20px] lg:text-[32px] mb-[20px] lg:mb-[32px]">Top Rating Film dan
                Series Hari
                ini
            </div>
            {/* <!-- start --> */}
            <div className="w-full relative">
                <div className="swiper multiple-slide-carousel swiper-container relative">
                    <div className="swiper-wrapper">
                        <TopRatingCard children={<BadgeBiru />} img="img/film/t1.png" />
                        <TopRatingCard img="img/film/t2.png" />
                        <TopRatingCard children={<BadgeBiru />} img="img/film/t3.png" />
                        <TopRatingCard img="img/film/t4.png" />
                        <TopRatingCard img="img/film/t5.png" />
                        <TopRatingCard img="img/film/t4.png" />
                        <TopRatingCard children={<BadgeBiru />} img="img/film/t3.png" />
                    </div>
                    {/* <!-- Button Next dan Prev --> */}
                    <div
                        className="absolute flex justify-center items-center m-auto left-0 right-0 w-[90%] lg:w-[95%] top-[50%]">
                        <button id="slider-button-left"
                            className="swiperPrev bg-[#2F3334] !p-2 flex justify-center items-center  border-[1px] border-[#fff] border-opacity-[0.3] !w-8 !h-8 lg:!w-12 lg:!h-12 transition-all duration-500 rounded-full  hover:bg-[#191b1c]"
                            data-carousel-prev>
                            <img className="cursor-pointer" src="img/arrowLeft.svg" alt="" />
                        </button>
                        <button id="slider-button-right"
                            className="swiperNext bg-[#2F3334] !p-2 flex justify-center items-center border-[1px] border-[#fff] border-opacity-[0.3] !w-8 !h-8 lg:!w-12 lg:!h-12 transition-all duration-500 rounded-full hover:bg-[#191b1c]"
                            data-carousel-next>
                            <img className="cursor-pointer" src="img/arrowRight.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopRating