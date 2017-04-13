import React from 'react';
import ReactDOM from 'react-dom';

import Plate from './components/Plate';

ReactDOM.render(
    <H1BGraph url="data/h1bs.csv" />,
    document.querySelectorAll('.plate')[0]
);
