import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

//this is the app component that have 2 states: robots and seachfield.
//and becouse app owns the state any component that have state uses de class syntax so they can use the constructor function to create this.state, and this.state is what changes in an app. is what describes the app.
//pure functions are functions with "thumb atributes" that always return the same. pure functions can just render
//
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
                    
export default App;