import {useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




function Movies({data}) {
     
    const [list, setList] = useState(data);
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