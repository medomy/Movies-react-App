import React, { useEffect, useState } from "react"
import Moviescard from '../../components/moviecard/moviecard'
import instanceMovies from "../../network/axiosconfig"
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { Pagination } from "react-bootstrap";
import { PageItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetMovs } from "../../store/getmoviesaction";
export default function Movies(props) {
    console.log(props);
    const historia = useHistory();
    const location = useLocation();
    let query="";
    console.log(historia);
    const [Movies, setMovies] = useState([]);
    let [counter ,setcounter] = useState(1);
    
    // used with api redux thunk call
    //let movieslist = useSelector((state)=> state.Movies.movieslist); 
    //let dispatch = useDispatch();
    function getFirstPage(){
        setcounter(1);
        historia.push(`/movies?page=${counter}`);
    }
    function getPreviousPage(){
        if(counter <= 1){
            setcounter(1);
        }
        else{
            setcounter(counter-1);
        }
        historia.push(`/movies?page=${counter}`);
    }
    function getNextPage(){
        if(counter > Movies.length){
            setcounter(Movies.length);
        }
        else{
            setcounter(counter+1);
        }
        historia.push(`/movies?page=${counter}`);
    }

    function getLastPage(){
        setcounter(Movies.length);
        historia.push(`/movies?page=${counter}`);
    }

    useEffect(() => {
        /*if(location.search !==""){
            setcounter(location.search.substr(6)) ;
        }*/
        historia.push(`/movies?page=${counter}`);
        console.log(location);
        instanceMovies.get(`/popular?api_key=4cef01add3ed74048591b83881eee0c9&page=${counter}`)
            .then((res) => {
                setMovies(res.data.results);
                console.log(Movies);
                console.log(Movies.length);
                console.log(res.data.results);
            })
            .catch((err) => console.log(err))
        
        

         // used with redux call api thunk    
        //dispatch(GetMovs());   
        

    }, [counter])


    //console.log(movieslist);

    return <>
        <div className="row justify-content-evenly">
            {Movies.map((movie) => {
                return <Moviescard key={movie.id} movie={movie} />
            })}
            
        </div>
        <div className="row justify-content-center">
        <Pagination className="justify-content-center">
                <Pagination.First onClick={()=>getFirstPage()}/>
                <Pagination.Prev onClick={()=>getPreviousPage()} />
                <Pagination.Next onClick={()=>getNextPage()} />
                <Pagination.Last onClick={()=>getLastPage()} />
        </Pagination>
        </div>
        



    </>
}