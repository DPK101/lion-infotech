import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import About from './components/About';
import AdminPage from './components/AdminPage';
import React from 'react';
import UserPage from './components/UserPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userType: 'user',
      products: []
    }
  }
  saveUserType = user => {
    this.setState({userType: user})
  }
  uploadProducts = products => {
    this.setState({
      products
    })
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <AdminPage products={this.state.products} uploadProducts={this.uploadProducts}/>
          </Route>
          <Route path="/user">
            <UserPage products={this.state.products} />
          </Route>
          <Route path="/">
            <Login saveUserType={this.saveUserType}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
