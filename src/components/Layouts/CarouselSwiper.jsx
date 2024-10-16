
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

    const tontonFilm = [
        {
            id: 1,
            tittle: "Don't Look Up",
            rating: "4.5/5",
            img: "img/film/c1.png",
        },
        {
            id: 2,
            tittle: "All of Us Are Dead",
            rating: "4.2/5",
            img: "img/film/c2.png",
        },
        {
            id: 3,
            tittle: "Blue Lock",
            rating: "4.6/5",
            img: "img/film/c3.png",
        },
        {
            id: 4,
            tittle: "A Man Called Otto",
            rating: "4.4/5",
            img: "img/film/c4.png",
        },
        {
            id: 5,
            tittle: "Blue Lock",
            rating: "4.6/5",
            img: "img/film/c3.png",
        },
        {
            id: 6,
            tittle: "All of Us Are Dead",
            rating: "4.2/5",
            img: "img/film/c2.png",
        },
    ]
    return (
        <div className="bg-primary px-[20px] lg:px-[80px] py-[20px] lg:py-[40px]">
            <div className="font-semibold text-[20px] lg:text-[32px] text-white mb-[20px] lg:mb-[32px]">Melanjutkan Tonton Film
            </div>
            <div className="relative h-full">
                <swiper-container ref={swiperElRef} className="mySwiper w-full h-full" pagination="true" pagination-clickable="true"
                    navigation="true">
                    {tontonFilm.map((item) => (
                        <swiper-slide class="rounded-lg text-center flex justify-start items-end text-white">
                            <Tittle tittle={item.tittle} rating={item.rating} />
                            <img class="block w-full h-full object-cover" src={item.img} alt="" />
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
        </div>
    )
}

export default CarouselSwiper