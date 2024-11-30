import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Tittle from '../Elements/Tittle/Tittle';
import { getTontonFilm } from '@/services/tontonFilm.services';
import PopUpCard from '../Fragments/popUpCard';
import { addFilm, clearSuccessMessage } from '@/stores/redux';
import { useDispatch, useSelector } from 'react-redux';

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


    const [tontonFilm, setTontonFilm] = useState([])

    useEffect(() => {
        getTontonFilm((data) => {
            setTontonFilm(data)
        })
    }, [])

    const dispatch = useDispatch();
    const reduxSuccessMessage = useSelector((state) => state.film.successMessage)
    const [localSuccessMessage, setLocalSuccessMessage] = useState("");

    useEffect(() => {
        if (reduxSuccessMessage) {
            setLocalSuccessMessage(reduxSuccessMessage)
            const timer = setTimeout(() => {
                dispatch(clearSuccessMessage())
                setLocalSuccessMessage("")
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [reduxSuccessMessage, dispatch])

    return (
        <div className="bg-primary container py-[20px] lg:py-[40px]">
            <div className="font-semibold text-[20px] lg:text-[32px] text-white mb-[20px] lg:mb-[32px]">Melanjutkan Tonton Film
            </div>
            <div className="relative h-full">
                <swiper-container ref={swiperElRef} className="mySwiper w-full h-full" pagination="true" pagination-clickable="true"
                    navigation="true">
                    {tontonFilm.map((item, index) => (
                        <swiper-slide key={index} className="rounded-lg text-center flex justify-start items-end text-white">
                            <label htmlFor={`rating_modal_${item.id}`} className="">
                                <div className="relative cursor-pointer group">
                                    <Tittle tittle={item.tittle} rating={item.rating} />
                                    <img className="block w-full h-full object-cover" src={item.img} alt="" />
                                </div>
                            </label>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>

            {tontonFilm.map((e) => (
                <div key={e.id}>
                    <input type="checkbox" id={`rating_modal_${e.id}`} className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-primary p-0 w-fit">
                            <PopUpCard img={e.img} tittle={e.tittle} />
                            <div className="flex justify-end items-center gap-2 lg:gap-4 mb-3 lg:mb-5 mx-3 lg:mx-6">
                                {localSuccessMessage && <span className="text-green-500">{localSuccessMessage}</span>}
                                <button className="btn text-white bg-slate-800 hover:bg-slate-900/80" onClick={() => dispatch(addFilm({ id: e.id, tittle: e.tittle, badge: e.badge, img: e.img }))}>Masukan List</button>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={`rating_modal_${e.id}`}>Close</label>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default CarouselSwiper