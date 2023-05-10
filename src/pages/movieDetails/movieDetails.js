import { useParams } from "react-router";
import PussInBoots from '../../assets/images/pussinboots.jpg';
import Avatar from '../../assets/images/avatar.webp';
import BlackDemon from '../../assets/images/blackdemon.jpg';
import EvilDeadRise from '../../assets/images/evildeadrise.avif';
import GuardiansOfTheGalaxy from '../../assets/images/guardiansofthegalaxy.jpg';
import JohnWick from '../../assets/images/johnwick.jpg';
import LittleMermaid from '../../assets/images/littlemermaid.webp';
import LoveAgain from '../../assets/images/loveagain.avif';
import TheLostCity from '../../assets/images/thelostcity.jpg';
import {useState} from 'react'

function MovieDetails(){
    const params = useParams();
    const movieId = params.movieId;

     let movieList = [
        {id: Math.random(), title: 'Puss in Boots', year: 2022, genre: 'animation', img: PussInBoots},
        {id: Math.random(), title: 'Avatar', year: 2023, genre: 'fantasy', img: Avatar},
        {id: Math.random(), title: 'Black Demon', year: 2023, genre: 'detective', img: BlackDemon},
        {id: Math.random(), title: 'EvilDeadRise', year: 2023, genre: 'horror', img: EvilDeadRise},
        {id: Math.random(), title: 'Guardians of the galaxy', year: 2023, genre: 'science fiction', img: GuardiansOfTheGalaxy},
        {id: Math.random(), title: 'John Wick', year: 2023, genre: 'action', img: JohnWick},
        {id: Math.random(), title: 'Little Mermaid', year: 2023, genre: 'fantasy', img: LittleMermaid},
        {id: Math.random(), title: 'Love Again', year: 2023, genre: 'drama', img: LoveAgain},
        {id: Math.random(), title: 'The Lost City', year: 2022, genre: 'action', img: TheLostCity},
    ]

     const [list, setList] = useState(movieList);
     
     const searchedMovie = list.find((i) => i.id === +movieId)

     console.log(searchedMovie)

   
   
 
    return(
        <div>
            <h1>Movie Details - {movieId} </h1>
                    <p>Title: {list[0].title}</p>
                    <p>Year: {list[0].year}</p>
                    <p>Genre: {list[0].genre}</p>
                    <img src={list[0].img}/>
        </div>
    )
}

export default MovieDetails;