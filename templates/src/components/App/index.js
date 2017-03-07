import React, { Component } from 'react';
import classnames from 'classnames';
import {Link} from 'react-router';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Fullstack!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='about'>Test React Router</Link>
        <br/>
        <br/>
        <a href='./api/express-test'>Test if Express is working</a>
        <br/>
        <br/>
        <a href='./api/products'>Test if Express and Sequelize are working</a>
      </div>
    );
  }
}

export default App;
