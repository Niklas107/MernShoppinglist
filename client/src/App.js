import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { Container } from 'reactstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import Navigation from './components/helper/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './Todo.css'

import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList/ShoppingList'
import ItemModal from './components/ShoppingList/ItemModal'
// import Todo from './components/Todo/Todo';
import { loadUser } from './actions/authActions'
// import ToDo, { TodoHeader, TodoList, TodoListItem, TodoForm, TodoApp } from './components/ToDo'

// class App extends Component {
//   componentDidMount() {
//     store.dispatch(loadUser());
//   }
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <AppNavbar />
//           <Container>
//             <ItemModal />
//             <ShoppingList />
//           </Container>
//         </div>
//       </Provider>
//     );
//   }
// }

// const App = () => {
//   return (



//   );
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
