import React, { useContext } from "react"
import { Navbar, Container, Nav, Button,Form,FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import {Count,AddToFavourites, SearchForMovies} from '../../../src/store/Action';
import { useDispatch, useSelector } from "react-redux";
import { Langfeature } from "../../contexts/Languagecontext";
import { useHistory } from "react-router";
export default function Navbarcomponent() {
    let search ;
    let counter = useSelector(state=> state.Favourites.Counter);
    const dispatch = useDispatch();
    const history = useHistory();
    // onchange function :
    function InputVal(e){
        console.log(e.target.value);
        search = e.target.value;
    }
    // search button function:
    function MovieSearch(){
        console.log(search);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4cef01add3ed74048591b83881eee0c9&query=${search}`)
        .then((res)=>{
            console.log(res.data.results);
            dispatch(SearchForMovies(res.data.results));
            history.push('/search');

        })
        .catch((err)=>alert(err));
    }

    //using language context :
    const {lang,setlang} = useContext(Langfeature);

    // function to change language onclick
    function changeLang(){
        setlang(lang === "en" ? "ar" : "en");
    }

    return <>
        <div className="row navbar-container">
            <Navbar bg="dark" expand="lg">
                <Container>

                    <Navbar.Brand><Link to="/">Movielix</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/" className="mx-2">Home</Link>
                        <Link to="/movies" className="mx-2">Movies</Link>
                        <Link to="/favs" className="mx-2">Favourites</Link>
                        <Link to="/favs" className="mx-2">{counter}</Link>
                            <Nav.Link onClick={()=> changeLang()}  >{lang}</Nav.Link>
                            <Nav.Link ></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                id="search"
                                onChange={(e)=>InputVal(e)}
                            />
                            <Button variant="outline-success" onClick={()=>MovieSearch()}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    </>
}