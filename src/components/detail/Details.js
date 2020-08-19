import React from "react";
import {connect} from "react-redux";
import findPerson from "../../utils/findPerson";
import {setActivePerson, loadPeople} from "../../actions/actions";
import peopleList from "../../data/people";
import PersonInfo from "./PersonInfo";

const mapStateToProps = (state) => {
    return {
        people: state.people,
        activePerson: findPerson(state.people, state.activePersonId)
    }
}

const action = {
    loadPeople,
    setActivePerson
}

class Details extends React.Component {

    componentDidMount() {
        if(!this.props.people.length && this.props.isSmall === true) this.props.loadPeople(peopleList)
         this.props.setActivePerson(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.props.activePerson || (this.props.match.params.id !== this.props.activePerson._id)) {
            this.props.setActivePerson(this.props.match.params.id)
        }
    }

    closeHandler = () => {
        this.props.setActivePerson(null);
        this.props.history.push('/main')
    }

    render(){
        if(!this.props.activePerson) return <div>Loading</div>
        else return <PersonInfo closeHandler={this.closeHandler} activePerson={this.props.activePerson}/>
    }
}

export default connect(mapStateToProps, action)(Details)