const initialstate = 0

export const stateReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'STATE_GET':
            return {
                state: action.payload
            }


        default: return state;
    }
};
