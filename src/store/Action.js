
export const Count = (counter)=>{
    return {
        type : "Count_Favourites",
        payload : counter
    }
}

export const AddToFavourites = (Add)=>{
    return{
        type : "Add_TO_Favourite",
        payload : Add
    }
}
export const SearchForMovies = (Movie)=>{
    return{
        type : "Search_For_Movies",
        payload : Movie
    }
}

  
