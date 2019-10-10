//A reducer is a big function that just reads the action and spits out what we call state

import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
    searchField: ''   //thats the initial state and the initial object that we are going to have in the store. 
}

//now we need to create the reducer remember that is a function. because we are going to use it in other places we have to export it 

export const searchRobots = (state=initialState, action={}) => {   //initial state is to avoid errors beign in blank. Para actuar en base a la accion recibida se ussan los case
    switch(action.type) { //could use if statement but switch is recommendable to have multiple cases and actions that act upon the search robots reducer and it's a lot easier to just add on and add on different things that affect the state of the robots
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload }); //3rd paramatrer must be passed like { x: y.z }//actions have two things that were sending: an object with type and another with payload
        default:
            return state;
   } 
}


// export const searchRobots = (state=initialState, action={}) => {   //initial state is to avoid errors beign in blank. Para actuar en base a la accion recibida se ussan los case
//     switch(action.type) {
//         case: CHANGE_SEARCH_FIELD:
//             return { ...state, searchField: action.payload } //destructuring or operator spreading. //actions have two things that were sending: an object with type and another with payload
//     } 
// }



//3 PRINCIPLES OF REACT is 
//1 SINGLE SOURCE OF TRUTH = BIG OBJECT DESC OUR APP. WE NEeD OUR INITIAL STATE VAR. in ORDER TO REACT RENDER MAKE CHANGES AND SIPLAY TO USER
//2 STATE IS READ ONLY = WE CAN NEVER MODIFY THAT OBJECT. WE CAN ONLY CREATE A NEW OBJECT THAT HAT THE SAME AS BEFORE WITH THE MODIFICATIONS
//3 CHANGES USING PURE FUNCTIONS. WE WANT THE REDUCER TO BE A PURE FUNCTION. THAT IS TAKING SOME SORT OF AN INPUT AND IT SHOULD RETURN A NEW STATE AND THHE WAY WE DO THAT WITHOUT STATE.SEARCHF AND MODIFING THQAT PROP, WE USE OBJECT.ASSIGN({}, STATE(THAT WE ARE RECEIVIGN WITCH IS THE INITIAL STATE), (WHATEVER WE WANT TO CHANGE: SEARCHFIELD: ACTION.PAYLOAD) ) 