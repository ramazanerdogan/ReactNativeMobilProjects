const INITIAL_STATE = {
    id: '', name: '', room: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                room: action.payload.room
            }

        default:
            return state
    }
};

export default userReducer