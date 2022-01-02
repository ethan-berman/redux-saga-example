import {END_FETCH, PROCESS_FETCH, START_FETCH} from "./actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case START_FETCH:
            return {
                ...state,
                loading: true,
            };
        case PROCESS_FETCH:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            };
        case END_FETCH:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}