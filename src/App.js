import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
 const [personsState, setPersonsState] = useState ( {
     persons: [
         {name: 'Ting01', age: '16'},
         {name: 'Ting02', age: '26'},
         {name: 'Ting03', age: '36'}


     ]
 });

 const switchNameHandler = () =>{
     setPersonsState(
         {
         persons: [
             {name: ' Ting 01 new', age: '16'},
             {name: 'Ting02', age: '26'},
             {name: 'Ting03', age: '36'}
         ]


         }
     );




 }


	  
	  
    return (
      <div className="App">
       <h1>Hi, I'am  a React App</h1>
	   <p>This is working</p>
          <button onClick={switchNameHandler}> Switch Name</button>
          <Person name = {personsState.persons[0].name} age= {personsState.persons[0].age} />
          <Person name = {personsState.persons[1].name} age= {personsState.persons[1].age} />
	
      </div>
	  );
	  

  //	  return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'Is it works?'))}
    
  
};

export default app;
