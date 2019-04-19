import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28, id: '1'},
            {name: 'Manu', age: 29, id: '2'},
            {name: 'Stephanie', age: 26, id: '3'}
        ],
        otherState: 'some other value',
        showPersons: false
    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        })
        const person = {
            ...this.state.persons[personIndex]
    };

        person.name= event.target.value;
        const persons =[...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons


        })
    }


    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonByIndex = (index) => {

        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons})


    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            margin: 'auto',
            ':houvr': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person

                                click={() => this.deletePersonByIndex(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />

                        )
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] ={
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        let classes = [];
        if (this.state.persons.length <=2) {
            classes.push('red'); //classes = ['red']
        }
        if (this.state.persons.length <=1){
            classes.push('bold');
        }



        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Radium(App);
