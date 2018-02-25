import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'


import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Login from './Login';
import Main from './Main';


class App extends Component {
  state = {
    uname: 'srogers',
    pass: 'topavenger1920'
  }
  componentDidMount() {
    this.props.fetchUser(this.state.uname, this.state.pass);
  }

  render() {
    console.log(this.props);
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path ="/main" component={Main} />
            <Footer />
          </div>
        </BrowserRouter>      
      </div>
    );
  }
};

export default connect(null, actions) (App);