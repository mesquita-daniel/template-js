import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header';
import './styles/main.scss';

ReactDOM.render(
    <Header text='Hello World!'/>,
    document.querySelector('#root')
)