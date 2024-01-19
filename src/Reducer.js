const initialState = {
    isBookAdded: false,
    isBookDeleted: false,
    modalMessage: '',
}


function reducer(state, action) {
    switch (action.type) {
        case 'BookAdded': {
            return {
                ...state,
                isBookAdded: true,
                modalMessage: 'Book is Added'
            };
        }
        case 'BookDeleted': {
            return {
                ...state,
                isBookDeleted: true,
                modalMessage: 'Book is Deleted'
            };
        }
        default:
            return state;
    }
}

export { reducer, initialState }