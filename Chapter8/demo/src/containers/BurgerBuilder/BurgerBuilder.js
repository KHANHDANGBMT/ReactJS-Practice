import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
    }

    componentDidMount() {
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0 ;
    }

   

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({ purchasing: true })
        }else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push("/auth");
        }
       
    }

    purchaseCancleHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // let queryParams = [];
        // for(let value in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(value) + '=' + encodeURIComponent(this.state.ingredients[value]));
        // }
        // queryParams.push('price='+this.props.price);
        // let queryComponent = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryComponent
        // });
        this.props.onInitPurchase();
        this.props.history.push("/checkout");
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error? <p>Ingredient can't be loaded</p> : <Spinner></Spinner>;
        if (this.props.ings) {
            burger = (<Aux>
                <Burger ingredients={this.props.ings} totalPrice={this.state.totalPrice}></Burger>
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasebled
                    ordered={this.purchaseHandler}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    isAuth={this.props.isAuthenticated}
                    totalPrice={this.props.price}
                ></BuildControls>
            </Aux>);
            orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseCanclled={this.purchaseCancleHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.props.price}
            show={this.state.purchasing}></OrderSummary>;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
