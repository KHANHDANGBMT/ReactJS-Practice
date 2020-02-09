import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary'

class person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return <Fragment>
                <p onClick={this.props.click}>Hi, I'm {this.props.name}, I'm {this.props.age} year old, Nice to meet you</p>
                <input value={this.props.currentName} onChange={this.props.changed}></input>
        </Fragment>
    }

}

person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default person;