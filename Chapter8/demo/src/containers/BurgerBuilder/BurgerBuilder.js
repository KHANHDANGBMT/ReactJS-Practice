import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/action';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get('https://react-my-burger-b3a67.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
                
        //     })
        //     .catch(error => {
        //         this.setState({error: error});
        //     });
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
        this.setState({ purchasing: true })
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
        
        let burger = this.state.error? <p>Ingredient can't be loaded</p> : <Spinner></Spinner>;
        

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

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>;
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
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName :ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName :ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
