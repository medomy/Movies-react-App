import React from "react"
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router";
export default function Moviescard(props) {
    const { movie } = props;
    const hist = useHistory();
    function sendMovie(){
        hist.push(`/details/${movie.id}`);
        console.log(hist);
    }
    return <>
        <div className="my-card mt-4 mx-4 col-6 col-md-2">
            <div className="rating">{movie.vote_average}</div>
            
            <div className="img-wrapper"><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className="Overlay "><Button variant="danger" onClick={()=>sendMovie()} movie={movie}>Details</Button></div></div>
            
            
            
            <h5 className="movie-title">{movie.title}</h5>
            <p>category</p>
        </div>

    </>
}