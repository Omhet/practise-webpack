import _ from 'lodash';
import './style/style.css';
import Icon from './img/flower.png';
import DataXML from './data/data.xml';
import DataJSON from './data/data.json';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const icon = new Image();
    icon.src = Icon;
    element.appendChild(icon);

    console.log({DataXML, DataJSON});

    return element;
}

document.body.appendChild(component());