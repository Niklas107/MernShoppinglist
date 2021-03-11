import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../../store'
import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import ShoppingList from '../ShoppingList/ShoppingList'
import ItemModal from '../ShoppingList/ItemModal'
// import Todo from './components/Todo/Todo';
import { loadUser } from '../../actions/authActions'

class Shopping extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Container>
                        <h1>Shoppinglist</h1>
                        <ItemModal />
                        <ShoppingList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default Shopping;