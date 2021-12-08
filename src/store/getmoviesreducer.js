const INITIAL_STATE = {
    movieslist: [],
  };
  
  export default function Moviesreducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movieslist: action.payload,
        };
      default:
        return state;
    }
  }