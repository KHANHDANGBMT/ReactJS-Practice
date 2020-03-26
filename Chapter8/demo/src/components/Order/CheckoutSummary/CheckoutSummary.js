import React from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';

const  checkoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancle}>CANCLE</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;