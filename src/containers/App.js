import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions'

//the way react-redux works is that it is going to communicate only with the containers, in this case App.js
//to the what we call redux store, or that big JSO that describe the state of our app.
//Then the container (Or smart components) will communicate with the store
//the other components, "dumb or presentational" wont know that redux exists.
//the diagram shows redux wich allows to create a store and other help functions. 
//Also downloaded React-Redux wich allows us to connect these two pieces. and its able to be used in order to say to containers we are using redux.and to get their state from the redux store!
//All we are doing is just connecting the 2 libraries together.

//this is the app component that have 2 states: robots and seachfield.
//and becouse app owns the state any component that have state uses de class syntax so they can use the constructor function to create this.state, and this.state is what changes in an app. is what describes the app.
//pure functions are functions with "thumb atributes" that always return the same. pure functions can just render
//

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField //tell me what piece of state i need to listen to and send down as props. 
    }
}

const mapDispatchToProps = (dispatch) => { //tell me what props i should listen to that are actions that need to be dispatched.
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)) //just as below in setearchfield
    }
}
//Dispatch from discussion about flux is what triggers the action, so an action is just an object that we've created. But in order to send this action we need something called dispatch to - so it gets dispatched into the reducer. So this dispatch can now be used to send actions, and the way we do that, we can say onSearchChange is prop name

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [], //toda la app se basa en estos 2
            searchfield: ''
        }
    }
/* 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });
 
    } */

    // real apps en react funcionan paso 1) loading bar, paso 2) haces una peticion o request, paso 3) e interactuas con los componentes 

    
    //paso 2
    componentDidMount() {//esto hace parte del state and lifecicle de react components (para las API)
        console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users') //fetch es un metodo en window object ("extraer") es una herramienta para hacer requests o solicitudes a servidores
            .then(response => response.json())
            .then(users => this.setState({ robots: users })); 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?  //this.state.robots porque nos referimos al estado o al state of the app.  '''if robots.length === 0 es lo mismo que return !robots.length? si no lenght no robot
            <h1>Loading</h1>:  //paso 1  //esto se lee si no hay robots retorna loading, si hay sigue.
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
        );
    }
}
                    
export default connect(mapStateToProps, mapDispatchToProps)(App); //connect is going to be a high order function and then another or another brackets around app. Now this syntax might look a little bit confusing and connect is something we call higher order function. Now a higher order function is a function that returns another function. So connect is going to run and whatever connect does inside of this function is going to return another function. And because it returns another function it's going to run this part with the app. So that's how higher order components work