import React from 'react';
import './modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/backdrop'

const modal = (props) => {
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
            <div className='Modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Aux>
    );

}

export default modal;