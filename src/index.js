import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';  //react-redux comes with nice and easy API of just two things. One is a provider and the other one is connect and using these two things we're going to be able to connect these two parts of our application.
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons'; //css facility

const store = createStore(searchRobots) //But as said before applications get more and more complex and you're going to have more and more actions that need to be taken. And we can keep listing actions related to search robots right in here but later on in the video we also need to get robots from the API. If you remember. now because of that we're going to have many many many reducers and in the store we want to combine all these reducers to create one root reducer which we're going to do later on.
//this store can now be accessed and passed down into our app. Remember with redux hypothetically we can remove all state from our react up and keep it inside of the store and pass down the store as a prop.


ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
                

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
