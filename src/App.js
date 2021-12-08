import logo from './logo.svg';
import './App.css';
import Navbarcomponent from './components/Navbarcomponent/navbar';
import Movies from './pages/movies/movies';
import Detais from './pages/Moviedetails/detais';
import Home from './pages/home/home';
import Errorpage from './pages/404/404';
import Favs from './pages/Favouritespage/Favs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// importing context
import {Langprovider,Langfeature} from '../src/contexts/Languagecontext';
import { useState } from 'react';
import SearchMovies from './pages/Search/SearchMovies';





function App() {
  const [lang,setlang] = useState("en");
  return (
    <>
    <Langprovider value = {{lang,setlang}}>
    <Router>
      <Navbarcomponent></Navbarcomponent>
      <Switch>
        <Route path='/' exact component={Movies} />
        <Route path='/movies' exact component={Movies} />
        <Route path='/search' exact component={SearchMovies} />
        <Route path='/details/:id' exact component={Detais} />
        <Route path='/favs' exact component={Favs} />
        <Route path='*' exact component={Errorpage} />
        
      </Switch>
    </Router>
    </Langprovider>
    </>
  );
}

export default App;
