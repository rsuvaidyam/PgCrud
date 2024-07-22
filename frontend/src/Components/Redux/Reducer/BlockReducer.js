const initialstate = 0

export const blockReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'BLOCK_GET':
            return {
                state: action.payload
            }


        default: return state;
    }
};
