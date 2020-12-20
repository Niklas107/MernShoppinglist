import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../../store'
import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import AppNavbar from '../AppNavbar'
import ShoppingList from '../ShoppingList/ShoppingList'
import ItemModal from '../ShoppingList/ItemModal'
// import Todo from './components/Todo/Todo';
import { loadUser } from '../../actions/authActions'

class home extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar />
                    <Container>
                        <ItemModal />
                        <ShoppingList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default home;