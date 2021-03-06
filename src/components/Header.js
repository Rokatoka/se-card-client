import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }


  render() {
    console.log("PROPS");
    console.log(this.props);
    console.log("PROPS.AUTH");
    console.log(this.props.auth);
    return (
      <nav style ={{ textAlign: 'center' }}>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/main' : '/'} className="left brand-logo">
            Logo
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
          </div>
      </nav>

    );
  }
}

function mapStateToProps( { auth } ) {
  return { auth };
}

export default connect(mapStateToProps) (Header);