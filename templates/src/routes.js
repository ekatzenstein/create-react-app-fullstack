import React from 'react';
import App from './components/App';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  )
};

export default Routes;
