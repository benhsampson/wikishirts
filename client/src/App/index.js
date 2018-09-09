import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <main>
      <Route
        path="/"
        component={Home}
      />
    </main>
  </Router>
);

export default App;
