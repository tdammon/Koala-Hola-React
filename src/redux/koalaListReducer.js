const koalaListReducter = (state = [], action) => {
    switch (action.type) {
        case 'SET_KOALAS':
            return action.payload;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.koal
export default koalaListReducter;