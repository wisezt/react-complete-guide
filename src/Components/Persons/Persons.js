import React, {Component} from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component{
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }



    render()
    {
        return (
            this.props.persons.map((person, index) => {
                    return <Person

                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}
                    />

                }
            )
        );
    };
}

export  default Persons;


