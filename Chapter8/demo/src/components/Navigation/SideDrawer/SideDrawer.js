import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses=["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuthenticated}></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
