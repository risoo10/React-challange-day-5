import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {ThemeProvider} from 'styled-components';

const theme = {
    brandBlue: '#38c9bf',
    brandWhite: '#ffffff',
    brandViolet: '#b479c9',
    brandYellow: '#f4be69',
    brandBlack: '#41504f',
    brandGrey: '#bec2c2',
    redColor: '#f5655d',
    blueOverlay: 'rgba(56, 201, 191, 0.9)',
    h1Size: '23px',
    h2Size: '17px',
    h3Size: '13px',
    sectionPadding: '73px 0px',
}

ReactDOM.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>,
    document.getElementById('root'));

