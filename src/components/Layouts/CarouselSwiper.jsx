import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const CarouselSwiper = () => {
    return (
        <div className="bg-primary px-[20px] lg:px-[80px] py-[20px] lg:py-[40px]">
            <div className="font-semibold text-[20px] lg:text-[32px] text-white mb-[20px] lg:mb-[32px]">Melanjutkan Tonton Film
            </div>
            <div className="relative h-full">
                <swiper-container className="mySwiper w-full h-full" init="false" pagination="true" pagination-clickable="true"
                    navigation="true">
                    {/* item 1  */}
                    <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
                        <div className="absolute w-full flex p-[16px] justify-between">
                            <div className="flex">
                                <p className="font-semibold text-[14px] lg:text-[18px]">Don't Look Up</p>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src="img/stars.svg" width="12px" alt="" />
                                <p className="text-[12px] lg:text-[16px]">4.5/5</p>
                            </div>
                        </div>
                        <img className="block w-full h-full object-cover" src="img/film/c1.png" alt="" />
                    </swiper-slide>
                    {/* item 2  */}
                    <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
                        <div className="absolute w-full flex p-[16px] justify-between">
                            <div className="flex">
                                <p className="font-semibold text-[14px] lg:text-[18px]">The Batman</p>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src="img/stars.svg" width="12px" alt="" />
                                <p className="text-[12px] lg:text-[16px]">4.2/5</p>
                            </div>
                        </div>
                        <img className="block w-full h-full object-cover" src="img/film/c2.png" alt="" />
                    </swiper-slide>
                    {/* item 3  */}
                    <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
                        <div className="absolute w-full flex p-[16px] justify-between">
                            <div className="flex">
                                <p className="font-semibold text-[14px] lg:text-[18px]">Blue Lock</p>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src="img/stars.svg" width="12px" alt="" />
                                <p className="text-[12px] lg:text-[16px]">4.6/5</p>
                            </div>
                        </div>
                        <img className="block w-full h-full object-cover" src="img/film/c3.png" alt="" />
                    </swiper-slide>
                    {/* item 4  */}
                    <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
                        <div className="absolute w-full flex p-[16px] justify-between">
                            <div className="flex">
                                <p className="font-semibold text-[14px] lg:text-[18px]">A Man Called Otto</p>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src="img/stars.svg" width="12px" alt="" />
                                <p className="text-[12px] lg:text-[16px]">4.4/5</p>
                            </div>
                        </div>
                        <img className="block w-full h-full object-cover" src="img/film/c4.png" alt="" />
                    </swiper-slide>
                    {/* item 5  */}
                    <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
                        <div className="absolute w-full flex p-[16px] justify-between">
                            <div className="flex">
                                <p className="font-semibold text-[14px] lg:text-[18px]">Blue Lock</p>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src="img/stars.svg" width="12px" alt="" />
                                <p className="text-[12px] lg:text-[16px]">4.6/5</p>
                            </div>
                        </div>
                        <img className="block w-full h-full object-cover" src="img/film/c3.png" alt="" />
                    </swiper-slide>
                    {/* item 6  */}
                    <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
                        <div className="absolute w-full flex p-[16px] justify-between">
                            <div className="flex">
                                <p className="font-semibold text-[14px] lg:text-[18px]">The Batman</p>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src="img/stars.svg" width="12px" alt="" />
                                <p className="text-[12px] lg:text-[16px]">4.2/5</p>
                            </div>
                        </div>
                        <img className="block w-full h-full object-cover" src="img/film/c2.png" alt="" />
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    )
}

export default CarouselSwiper