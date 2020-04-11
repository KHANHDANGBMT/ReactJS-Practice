import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
                return { showSideDrawer: !prevState.showSideDrawer }
            }
        );
    }
    render() {
        return (
            <Aux>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler} 
                    isAuthenticated={this.props.isAuthenticated}
                    />
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler} 
                    open={this.state.showSideDrawer} 
                    isAuthenticated={this.props.isAuthenticated}
                    />
                <main className="margin-all">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);