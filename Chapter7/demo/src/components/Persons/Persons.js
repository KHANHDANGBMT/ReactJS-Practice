import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            currentName={person.name}
            click={() => props.clicked(index)}
            changed={(event) => props.changed(event, person.id)}
        ></Person>;
    });
}

export default Persons;