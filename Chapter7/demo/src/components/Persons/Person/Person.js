import React, { Component, Fragment } from 'react'
import Aux from '../../../hoc/Aux'

class person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return <Fragment>
                <p onClick={this.props.click}>Hi, I'm {this.props.name}, I'm {this.props.age} year old, Nice to meet you</p>
                <input value={this.props.currentName} onChange={this.props.changed}></input>
        </Fragment>
    }

}

export default person;