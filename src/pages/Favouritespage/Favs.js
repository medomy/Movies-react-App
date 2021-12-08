import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { Count, AddToFavourites } from '../../../src/store/Action';
import { useDispatch, useSelector } from "react-redux";
export default function Favs(props) {
    // getting the array of favourites from redux
    let favs = useSelector(state => state.Favourites.Favourites);
    let hist =useHistory();
    console.log(hist);
    /*function sendMovie() {
        hist.push(`/details/${movie.id}`);
        console.log(hist);
    }*/
    useEffect(() => {
        // to make sure data arrived 
        console.log(favs);
    }, [])
    return <>
        <div className="row justify-content-evenly">
            {favs.map((fav) => {
                return <div className="my-card mt-4 mx-4 col-6 col-md-2">
                    <div className="rating">{fav.vote_average}</div>

                    <div className="img-wrapper"><img src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`} />
                    </div>
                    <h5 className="movie-title">{fav.title}</h5>
                    <p>category</p>
                </div>
            })}
        </div>


    </>
}