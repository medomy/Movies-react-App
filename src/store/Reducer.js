
let Init_state ={
    Favourites : [],
    Counter : 0,
    searched : []

}

export default function FavReducer(state = Init_state , action){
    switch (action.type){
        case "Count_Favourites":
            return{
                ...state,
                Counter:action.payload
        };
        case "Add_TO_Favourite":
            return{
                ...state,
                Favourites : state.Favourites.concat(action.payload)
        };
        case "Search_For_Movies":
            return{
                ...state,
                searched : action.payload
        };
        default : 
            return state;       
    }
};