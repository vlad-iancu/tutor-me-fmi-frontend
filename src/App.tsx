import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './app/landing/Landing';
import Login from './app/login/Login';
import store from './redux/store'
import Register from './app/register/Register';
function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/register" >
            <Register />
          </Route>
          <Route path="/" >
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}
export default App;
