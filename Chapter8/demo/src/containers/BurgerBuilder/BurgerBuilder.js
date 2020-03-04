import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum >= 0 });
    }

    addingIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]; // lấy số lượng type cũ
        const updateCount = oldCount + 1; // tăng lên 1
        const updatedIngredient = { // tạo object mới lưu giá trị cũ 
            ...this.state.ingredients // copy ingredients
        }
        updatedIngredient[type] = updateCount; // gán giá trị mới cho type
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
        this.updatePurchaseState(this.state.ingredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
        this.updatePurchaseState(this.state.ingredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancleHandler = () =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () =>{
        alert("You continue");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        purchaseCanclled={this.purchaseCancleHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}></Burger>
                <BuildControls
                    ingredientAdded={this.addingIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                ></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;