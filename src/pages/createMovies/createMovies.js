import { useState } from 'react';
import { Link } from 'react-router-dom'

function CreateMovies({data}){
   
    const [list, setList] = useState(data)
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