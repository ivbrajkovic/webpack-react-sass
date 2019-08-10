import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
//import './_App.scss';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Hello World!!!</h2>
            </div>
        );
    }
}

export default hot(App);
//export default App;
