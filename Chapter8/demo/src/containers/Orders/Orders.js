import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('./oders.json')
            .then(res => {
                console.log(res.data);
                let fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({...res.data[key], id: key});
                }
                this.setState({loading: false, orders: fetchOrders});
            })
            .catch(err => {
                this.setState({loading:false});
            })
    }

    render () {
        return (
            <div>
                {this.state.orders.map((order)=>{
                    return <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    ></Order>;
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);