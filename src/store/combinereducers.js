import { combineReducers } from "redux";
import  FavReducer  from "./Reducer";
import Moviesreducer from "./getmoviesreducer";



export default combineReducers({
    Favourites : FavReducer,
    Movies : Moviesreducer
})