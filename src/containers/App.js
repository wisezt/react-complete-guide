import React, {Component} from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit';

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

        person.name = event.target.value;


        const persons = [...this.state.persons];
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

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonByIndex}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );

        }


        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
