

const initialState={
    userInput:{},
    mealdetail:{}
}
export default function todoReducer(state=initialState,action) {
    console.log(action);
    switch(action.type){
        case "ADD_USER_DATA":
            return {...state,...action.value}
        case "DELETE_USER_DATA":
            return initialState 
        default:
            return state       
    }
}
