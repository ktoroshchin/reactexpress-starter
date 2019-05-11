import React,{ Component } from 'react'
import axios from 'axios';

class Customers extends Component {

    state = {
        customers: []
    }

    componentDidMount(){
       axios.get('/api/customers')
        .then((response) => {
            this.setState({customers: response.data})
        })  
    }

    renderUsers = () => {
        return(
            this.state.customers.map(user => {
                return(
                    <li key={user.id}>{user.name}, Email: {user.email}</li>
                )
            })
        )
    }

    render() {
        return (
        <div>
            {this.renderUsers()}
        </div>
        )
    }
}

export default Customers;