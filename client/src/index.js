import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

import base from './constants/base';

import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  ${base};
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
