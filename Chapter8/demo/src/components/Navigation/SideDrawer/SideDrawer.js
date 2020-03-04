import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show/>
            <div className="SideDrawer">
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;