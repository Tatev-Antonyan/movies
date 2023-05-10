import { useState } from 'react';
import PussInBoots from '../../assets/images/pussinboots.jpg';
import Avatar from '../../assets/images/avatar.webp';
import BlackDemon from '../../assets/images/blackdemon.jpg';
import EvilDeadRise from '../../assets/images/evildeadrise.avif';
import GuardiansOfTheGalaxy from '../../assets/images/guardiansofthegalaxy.jpg';
import JohnWick from '../../assets/images/johnwick.jpg';
import LittleMermaid from '../../assets/images/littlemermaid.webp';
import LoveAgain from '../../assets/images/loveagain.avif';
import TheLostCity from '../../assets/images/thelostcity.jpg';
import { Link } from 'react-router-dom'





function CreateMovies(){
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

    const [list, setList] = useState(movieList)
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [genre, setGenre] = useState();
    const [img, setImg] = useState();

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value)
    }

    const handleImgChange = (e) => {
        setImg(e.target.value) 
    }



    const handleAddNew = () => {
        setList([...list, {id: Math.random(), title: title, year: year, genre: genre, img: img}])
    }

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Admin Panel</h1>
            <div className={'add_inputs'}>         
            <input value={title} placeholder="Add Title" onChange={handleTitleChange}/>
            <input value={year} placeholder="Add Year" onChange={handleYearChange}/>
            <input value={genre} placeholder="Add Genre" onChange={handleGenreChange}/>
            <input type={'file'} value={img} placeholder="Add Img" onChange={handleImgChange}/>
            <button onClick={handleAddNew}>Add New Movie</button>
            </div>
            {list.map((i, k) =>(
                <div key={k} className={'movie_item'}>
                    <Link to={`/movieDetails/${i?.id}`}>
                    <img className={"movie_img"} src={i.img}/>
                    <h3>{i.title}</h3>
                    </Link>
                    <p>{i.genre}</p>
                    <p>{i.year}</p> 
                </div>
            )) 
            }
            
        </div>
    )
}

export default CreateMovies;