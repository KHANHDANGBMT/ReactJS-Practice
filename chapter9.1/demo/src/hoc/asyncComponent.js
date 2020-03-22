import React, { Componet, Component } from 'react'

const asyncCompoent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount() {
            importComponent()
                .then(cmp => {
                    console.log("cmp.default: "+cmp.default );
                    this.setState({ component: cmp.default })
                })
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props}></C> : null;
        }
    }
}

export default asyncCompoent;