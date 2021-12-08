import { createStore, applyMiddleware , compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinereducers from "./combinereducers";
import thunk from "redux-thunk";
import FavReducer from "./Reducer";

/*const Devtool = window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION();

const Store = createStore(FavReducer,Devtool);*/

const Store = createStore(combinereducers,composeWithDevTools(applyMiddleware(thunk)));


export default Store;