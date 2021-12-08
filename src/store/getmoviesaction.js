import instanceMovies from "../network/axiosconfig"

export const GetMovs = ()=> (dispatch)=>{
    return instanceMovies.get("/popular?api_key=4cef01add3ed74048591b83881eee0c9")
    .then((res)=>dispatch({
        type : "GET_MOVIES",
        payload : res.data.results
    }))
    .catch((err)=>console.log(err));
}
