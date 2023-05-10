import { useParams } from "react-router";
import {useState} from 'react'

function MovieDetails({data}){
    const { id } = useParams();
     
    return(
        <div>
            <h1>Movie Details</h1>
                {data.filter((i) => i.id === +id).map((i, k) => {
                    return(
                        <div key={k}>
                            <p><b>Title:</b> {i.title}</p>
                            <p><b>Year:</b> {i.year}</p>
                            <p><b>Genre:</b> {i.genre}</p>
                            <img className={'movie_item_img'} src={i.img}/>
                            <p><b>Description: <br/> </b>{i.description}</p>
                        </div>
                )
                })
                }         
        </div>
    )
}

export default MovieDetails;