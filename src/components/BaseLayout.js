import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

class BaseLayout extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="container">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="#">Photo Album</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <NavLink className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
              <NavLink className="nav-item nav-link" to="/album1">Album 1</NavLink>
              <NavLink className="nav-item nav-link" to="album2">Album 2</NavLink>
              <NavLink className="nav-item nav-link" to="album3">Album 3</NavLink>
              <NavLink className="nav-item nav-link" to="album4">Album 4</NavLink>
              <NavLink className="nav-item nav-link" to="album5">Album 5</NavLink>
              <NavLink className="nav-item nav-link" to="album6">Album 6</NavLink>
              </div>
            </div>
          </nav>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default BaseLayout;
