import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
     persons: [
         {name: 'Ting01', age: '16'},
         {name: 'Ting02', age: '26'},
         {name: 'Ting03', age: '36'}


     ]
 }

 switchNameHandler = () =>{
     this.setState(
         {
         persons: [
             {name: ' Ting 01 new', age: '16'},
             {name: 'Ting02', age: '26'},
             {name: 'Ting03', age: '36'}
         ]


         }
     );




 }


  render() {
	  
	  
    return (
      <div className="App">
       <h1>Hi, I'am  a React App</h1>
	   <p>This is working</p>
          <button onClick={this.switchNameHandler}> Switch Name</button>
          <Person name = {this.state.persons[0].name} age= {this.state.persons[0].age} />
          <Person name = {this.state.persons[1].name} age= {this.state.persons[1].age} />
	
      </div>
	  );
	  
  }
  //	  return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'Is it works?'))}
    
  
}

export default App;
