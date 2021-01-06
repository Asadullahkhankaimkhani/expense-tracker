import React , {createContext , useReducer} from "react";

// initial State

const intitialState = {
    transactions : [
        {id : 1 , text : 'flower' , amount : -20},
        {id : 2 , text : 'cash' , amount : 10},
        {id : 3 , text : 'bill' , amount : -40}
    ]
}

// create context

export const GobalContext = createContext(intitialState)