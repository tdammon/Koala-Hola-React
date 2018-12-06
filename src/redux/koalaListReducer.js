const koalaListReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'SET_KOALAS':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.koal
export default koalaListReducer;