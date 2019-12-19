import React from 'react'
class hello extends React.Component{
    render(props){
    return(
        <div>
            <h1>Hello {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>  
        );
    }
}
export default hello;