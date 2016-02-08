
import MealsViewer from './MealsViewer'
import dataStore from './DataStore'

import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/MealViewer.scss');
require('font-awesome/css/font-awesome.css');



ReactDOM.render( 
    React.createElement(MealsViewer, {data: dataStore.getData()}), 
    document.getElementById('app') 
    );
