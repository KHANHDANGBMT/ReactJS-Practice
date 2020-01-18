import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] gerDerivedStateFromProps');
        return state;
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdaate');
    //     if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                currentName={person.name}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
            ></Person>;
        });
    }
}

export default Persons;