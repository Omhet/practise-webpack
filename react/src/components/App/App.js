import React, { Component } from 'react';
import './style.css';

class App extends Component {
    render() {
        return <div>
            <h1>Hello</h1>
            <button onClick={() => console.log('Click')}>Click</button>
        </div>;
    }
}

export default App;