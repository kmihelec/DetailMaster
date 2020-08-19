const findPerson = (peopleList, id) => {
    return peopleList.find(person => person._id === id)
}

export default findPerson