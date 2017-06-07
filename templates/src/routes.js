import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';

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
