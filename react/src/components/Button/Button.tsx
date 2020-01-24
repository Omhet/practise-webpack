import React, { FunctionComponent } from 'react';
import './style.css';

const Button: FunctionComponent = () => {
        return <div>
            <button onClick={() => console.log('Click')}>Click</button>
        </div>;
    }

export default Button;