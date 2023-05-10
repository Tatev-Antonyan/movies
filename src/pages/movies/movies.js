import PussInBoots from '../../assets/images/pussinboots.jpg';
import Avatar from '../../assets/images/avatar.webp';
import BlackDemon from '../../assets/images/blackdemon.jpg';
import EvilDeadRise from '../../assets/images/evildeadrise.avif';
import GuardiansOfTheGalaxy from '../../assets/images/guardiansofthegalaxy.jpg';
import JohnWick from '../../assets/images/johnwick.jpg';
import LittleMermaid from '../../assets/images/littlemermaid.webp';
import LoveAgain from '../../assets/images/loveagain.avif';
import TheLostCity from '../../assets/images/thelostcity.jpg';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




function Movies() {
     
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
    const [show, setShow] = useState(null);
    const [comment, setComment] = useState()

    // const handleChange = (e) => {
    //     setComment(e.target.value)
    // }

    const handleAddComment = () => {
        setComment(list['comment'] = comment)
    }

    return(
        <div className={"movies_container"}>
            <h1  style={{textAlign: 'center'}}>Movies</h1>
            {list?.length ? list.map((i, k) =>(
                <div key={k} className={'movie_item'}>
                    <Link to={`/movieDetails/${i?.id}`}>
                    <img className={"movie_img"} src={i.img}/>
                    <h3>{i.title}</h3>
                    </Link>
                    <p>{i.genre}</p>
                    <p>{i.year}</p> 
                    <button onClick={() => setShow(i.id)}>Comment</button>
                    <p>{i.comment}</p>
                </div>
            )) :
                <p>Not Yet</p>
            }

            {show &&
                <div className={'popup_bckg'}>
                    <div className={'popup'}>
                        <button onClick={() => setShow(null)}>X</button>
                        <input type={'text'} placeholder={'Comment'} value={comment}/>
                        <button onClick={handleAddComment}>Add</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Movies;


Movies.propTypes = {
    requiredList: PropTypes.any.isRequired
}