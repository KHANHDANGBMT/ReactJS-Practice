import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-my-burger-b3a67.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data })
            })
            .catch(error => {
                this.setState({error: error});
            });
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
        this.setState({ purchasing: true })
    }

    purchaseCancleHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        //alert("You continue");
        this.setState({
            loading: true
        });
        const orders = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'max dang',
                address: {
                    street: 'test street 1',
                    zipcode: '610200',
                    country: 'vietnam'
                },
                email: 'khanhdangbmt@mm.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/oders.json', orders)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false, purchasing: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false, purchasing: false
                });
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        
        let burger = this.state.error? <p>Ingredient can't be loaded</p> : <Spinner></Spinner>;

        if (this.state.ingredients) {
            burger = (<Aux>
                <Burger ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}></Burger>
                <BuildControls
                    ingredientAdded={this.addingIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                ></BuildControls>
            </Aux>);
            orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanclled={this.purchaseCancleHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);
