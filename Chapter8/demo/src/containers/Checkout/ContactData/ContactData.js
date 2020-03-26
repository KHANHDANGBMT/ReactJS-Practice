import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'max dang',
                address: {
                    street: 'test street 1',
                    zipcode: '610200',
                    country: 'vietnam'
                },
                email: 'khanhdangbt@mm.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/oders.json', orders)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false
                });
            });
    }

    render() {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name"></input>
                <input className="Input" type="text" name="email" placeholder="Your Mail"></input>
                <input className="Input" type="text" name="address" placeholder="Your Address"></input>
                <input className="Input" type="text" name="postalCode" placeholder="Your Postalcode"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER NOW</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner></Spinner>;
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;