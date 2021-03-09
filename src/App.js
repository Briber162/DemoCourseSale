import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesale from './Coursesale';
import { render } from '@testing-library/react';

class App extends Component{
  render(){

    var courses = [
      {name: 'Complete iOS10 dev course ', price: 199},
      {name: 'Complete penetrating course ', price: 299},
      {name: 'Complete front end dev course ', price: 359},
      {name: 'Complete Bug Bounty course ', price: 159}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <b>Course Purchase</b>
          </p>          
        </header>

        <Coursesale items={courses}/>

      </div>
    );
  }

}

export default App;
