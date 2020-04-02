import React, {Component} from 'react';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    constructor(props){
        super(props);
        this.checkoutCancleHandler = this.checkoutCancleHandler.bind(this);
        this.checkoutContinueHandler = this.checkoutContinueHandler.bind(this);
    }

    // componentWillMount () {
    //     const query = new URLSearchParams(this.props.location.search);
    //     let ingredients = {};
    //     let price =0;
    //     for (let param of query.entries()) { // entries: chuyển về thành từng cặp [key, value] giống for.. in
    //         if(param[0] === 'price'){
    //             price = +param[1];
    //         } else {
    //             ingredients[param[0]]= +param[1]; // param[0] lần lượt là salad, bacon, meat, cheese. param[1] là số lượng 
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }
    

    checkoutCancleHandler () {
        this.props.history.goBack();
    }

    checkoutContinueHandler () {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings} 
                    checkoutCancle = {this.checkoutCancleHandler}
                    checkoutContinue = {this.checkoutContinueHandler}
                ></CheckoutSummary>
                <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData}
                ></Route>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);