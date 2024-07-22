const initialstate = 0

export const distReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'DIST_GET':
            return {
                state: action.payload
            }


        default: return state;
    }
};
