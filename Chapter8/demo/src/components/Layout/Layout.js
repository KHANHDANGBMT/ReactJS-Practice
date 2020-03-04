import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
       <Toolbar/>
       <SideDrawer/>
        <main className="margin-all">
            {props.children}
        </main>
    </Aux>
);

export default layout;