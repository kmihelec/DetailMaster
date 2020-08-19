const initialState = {
    people: [],
    activePersonId: null
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PEOPLE':
            return {
                ...state,
                people: state.people.concat(action.people)
            }
        case 'SET_ACTIVE_PERSON':
            return {
                ...state,
                activePersonId: action.id
            }
        default:
            return state

    }
}

export default peopleReducer;