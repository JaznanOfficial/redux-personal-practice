import { INCREMENT } from "./actionTypes"
import { DECREMENT } from "./actionTypes"





// action creator---------->

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

export const decremetn = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}