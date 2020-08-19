import React from "react";
import {NavLink} from "react-router-dom";
import { loadPeople } from "../../actions/actions";
import {connect} from "react-redux";
import peopleList from "../../data/people";
import style from './MainList.module.css'

const actions = {
    loadPeople
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
    }
}

class MainList extends React.Component {

    componentDidMount() {
        if(!this.props.people.length)this.props.loadPeople(peopleList)
    }

    render() {
        return (
            <div className={style.mainList}>
                {this.props.people.map(person => (
                    <NavLink to={`/main/person/${person._id}`}
                             key={person._id}
                             className={style.listItem}
                             activeClassName={style.listItemActive}
                    >
                        {person.firstName + ' ' + person.lastName}
                    </NavLink>))}
            </div>
        )
    }
}

export default connect(mapStateToProps, actions)(MainList)