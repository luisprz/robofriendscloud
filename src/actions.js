// redux have 2 components: an action and a reducer.
//using just plain old js. that action is going to filter the robots

import { CHANGE_SEARCH_FIELD } from './constants.js' //as im exporting it in constants.js i have to import it here.
import { statement } from '@babel/template'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text

})

