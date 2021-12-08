import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Moviescard from "../../components/moviecard/moviecard";


export default function SearchMovies(){
    const searchedMovies = useSelector((state)=> state.Favourites.searched);

    return(
        <>
        <div className="row justify-content-evenly">
        {searchedMovies.map((movie)=>{
            return <Moviescard key={movie.id} movie={movie} />
        })}
        </div>
        </>
    )
}