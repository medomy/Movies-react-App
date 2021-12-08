import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card,Button } from "react-bootstrap";
import instanceMovies from "../../network/axiosconfig";
import {Count,AddToFavourites} from '../../../src/store/Action';
import { useDispatch, useSelector } from "react-redux";
export default function Detais(props) {
    // getting the id to put it in the api search
    const param = useParams();
    console.log(param.id);
   // console.log(props);
   // setting the movie i get from the search api (my movie)
    const [movie, setmovie]   = useState({});
    //getting the counter and favourites array from redux store (used combined reducers)
    let counter = useSelector(state => state.Favourites.Counter);
    let favs = useSelector(state => state.Favourites.Favourites);
    // using dispatch to fire changes on my global variables
    let Dispatch = useDispatch();
    //let favsarra = [];
    //let myCounter = 0;

    // useEffect to render the data one time (usually used in fetches)

    useEffect(() => {
        instanceMovies.get(`/${param.id}?api_key=4cef01add3ed74048591b83881eee0c9`)
            .then((res) => {
                console.log(res.data);
                setmovie(res.data);
                console.log(movie);
            })
            .catch((err) => console.log(err))

    }, [])

    // the onclick favourite function (add the movie to favs and increase counter)
    function FavouriteOperation(){
        // operation to get the favourite star
        var btn = document.getElementById("btn");
        var star = document.getElementById("star");
        // changing the values from redux
        Dispatch(Count(counter+1));
        Dispatch(AddToFavourites(movie));
        
        btn.style.display = "none";
        star.style.display="inline ";
        
        //consoles to check (used devtools also)
        /*console.log(counter);
        console.log(favs);*/
    }
    return <>

        <div className="row justify-content-center my-5 mx-3">
            <Card className="bg-dark text-white">
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Card.Text>{movie.tagline}</Card.Text>
                    <Button className="btn btn-primary" onClick={()=>FavouriteOperation()} id="btn">Add to favs</Button>
                    <i className="fas fa-star " id="star"></i>
                </Card.ImgOverlay>
            </Card>
        </div>

    </>
}