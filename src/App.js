import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainList from "./components/master/MainList";
import PersonInfo from "./components/detail/Details";
import style from './App.module.css';

class App extends React.Component {
    state={
        isSmall: window.innerWidth < 768
    }

    componentDidMount() {
        window.addEventListener('resize', this.widthChange)
    }

    widthChange = () => {

        if (window.innerWidth > 768 && this.state.isSmall) this.setState({isSmall: false})
        else if (window.innerWidth <= 768 && !this.state.isSmall) this.setState({isSmall: true})
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.widthChange)
    }

    render() {
    return (
        <div className={style.App}>
            <Route exact path={'/'}><Redirect to={'/main'}/></Route>
            <Route  path={'/main'} render={props => <MainList {...props} isSmall={this.state.isSmall} />}/>
            {this.state.isSmall ?
                <Switch>
                    <Route path={'/person/:id'} render={props => <PersonInfo {...props} isSmall={this.state.isSmall}/>} />
                    <Redirect from={'/main/person/:id'} to={'/person/:id'} />
                </Switch> :
                <Switch>
                    <Route path={'/main/person/:id'} component={PersonInfo}/>
                    <Redirect from={'/person/:id'} to={'/main/person/:id'} />
                </Switch>
            }
        </div>
    );
  }
}

export default App;
