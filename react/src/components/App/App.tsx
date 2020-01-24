import React, { PureComponent } from 'react';
import './style.css';
import Button from '../Button/Button';

class App extends PureComponent {
    render() {
        return <div>
            <h1>Hello</h1>
           <Button />
        </div>;
    }
}

export default App;