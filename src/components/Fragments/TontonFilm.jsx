import Tittle from "../Elements/Tittle/Tittle"

const TontonFilm = (props) => {
    const { tittle, rating, img } = props
    return (
        <swiper-slide className="rounded-lg text-center flex justify-start items-end text-white">
            <Tittle tittle={tittle} rating={rating} />
            <img className="block w-full h-full" src={img} alt="" />
        </swiper-slide>
    )
}

export default TontonFilm