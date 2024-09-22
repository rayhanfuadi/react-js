
import TontonFilm from '../Fragments/TontonFilm';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Tittle from '../Elements/Tittle/Tittle';

register();

export const CarouselSwiper = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        const swiperEl = document.querySelector('swiper-container');
        Object.assign(swiperEl, {
            slidesPerView: 4,
            spaceBetween: 24,
            pagination: {
                clickable: true,
            },
            breakpoints: {
                140: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        })
        swiperEl.initialize();
    }, []);

    return (

        <div className="bg-primary px-[20px] lg:px-[80px] py-[20px] lg:py-[40px]">
            <div className="font-semibold text-[20px] lg:text-[32px] text-white mb-[20px] lg:mb-[32px]">Melanjutkan Tonton Film
            </div>
            <div className="relative h-full">
                <swiper-container ref={swiperElRef} className="mySwiper w-full h-full" pagination="true" pagination-clickable="true"
                    navigation="true">
                    {/* item 1  */}
                    <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                        <Tittle tittle="Don't Look Up" rating="4.5/5" />
                        <img class="block w-full h-full object-cover" src="img/film/c1.png" alt="" />
                    </swiper-slide>
                    {/* item 2  */}
                    <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                        <Tittle tittle="All of Us Are Dead" rating="4.2/5" />
                        <img class="block w-full h-full object-cover" src="img/film/c2.png" alt="" />
                    </swiper-slide>
                    {/* item 3  */}
                    <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                        <Tittle tittle="Blue Lock" rating="4.6/5" />
                        <img class="block w-full h-full object-cover" src="img/film/c3.png" alt="" />
                    </swiper-slide>
                    {/* item 4  */}
                    <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                        <Tittle tittle="A Man Called Otto" rating="4.4/5" />
                        <img class="block w-full h-full object-cover" src="img/film/c4.png" alt="" />
                    </swiper-slide>
                    {/* item 5  */}
                    <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                        <Tittle tittle="Blue Lock" rating="4.6/5" />
                        <img class="block w-full h-full object-cover" src="img/film/c3.png" alt="" />
                    </swiper-slide>
                    {/* item 6  */}
                    <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                        <Tittle tittle="All of Us Are Dead" rating="4.2/5" />
                        <img class="block w-full h-full object-cover" src="img/film/c2.png" alt="" />
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    )
}

export default CarouselSwiper