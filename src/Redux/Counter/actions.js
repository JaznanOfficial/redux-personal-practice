import { INCREMENT } from "./actionTypes";
import { DECREMENT } from "./actionTypes";

// action creator---------->

export const increment = () => {
    return {
        type: INCREMENT,
        
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
        
    };
};
