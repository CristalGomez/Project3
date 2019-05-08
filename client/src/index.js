import React from 'react';
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import serviceWorker from './serviceWorker'

render(<App />, document.getElementById('root') );
registerServiceWorker()
