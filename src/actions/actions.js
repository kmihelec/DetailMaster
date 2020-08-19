export const loadPeople = (people) => {
    return {
        type: 'LOAD_PEOPLE',
        people
    }
}

export const setActivePerson = (id) => {
    return {
        type: 'SET_ACTIVE_PERSON',
        id
    }
}
