import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
	  
	  
    return (
      <div className="App">
       <h1>Hi, I'am  a React App</h1>
	   <p>This is working</p>
          <Person/>
	
      </div>
	  );
	  
  }
  //	  return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'Is it works?'))}
    
  
}

export default App;
