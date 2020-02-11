import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary'

class person extends Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        this.inputElement.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        return <Fragment>
            {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Login</p>  }
                <p onClick={this.props.click}>Hi, I'qm {this.props.name}, I'm {this.props.age} year old, Nice to meet you</p>
                <input 
                value={this.props.currentName} 
                onChange={this.props.changed} 
                ref={this.inputElement}></input>
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