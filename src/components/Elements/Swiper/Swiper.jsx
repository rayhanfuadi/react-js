// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import TontonFilm from '../../Fragments/TontonFilm';

const Swiper = () => {
    return (
        <div className="relative h-full">
            <swiper-container className="mySwiper w-full h-full" init="false" pagination="true" pagination-clickable="true"
                navigation="true">
                {/* item 1  */}
                <TontonFilm tittle="Don't Look Up" rating="4.5/5" img="img/film/c1.png" />
                {/* item 2  */}
                <TontonFilm tittle="The Batman" rating="4.2/5" img="img/film/c2.png" />
                {/* item 3  */}
                <TontonFilm tittle="Blue Lock" rating="4.6/5" img="img/film/c3.png" />
                {/* item 4  */}
                <TontonFilm tittle="A Man Called Otto" rating="4.4/5" img="img/film/c4.png" />
                {/* item 5  */}
                <TontonFilm tittle="Blue Lock" rating="4.6/5" img="img/film/c3.png" />
                {/* item 6  */}
                <TontonFilm tittle="The Batman" rating="4.2/5" img="img/film/c2.png" />
            </swiper-container>
        </div>
    )
}

export default Swiper