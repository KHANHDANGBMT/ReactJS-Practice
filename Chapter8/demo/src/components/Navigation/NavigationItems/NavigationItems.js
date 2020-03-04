import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem active link="/">Burger</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default navigationItems;