import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar collapseOnSelect className="m-auto justify-content-center" expand="lg" variant="dark" id="navbar">
          <Navbar.Brand href="/">Mark Stouffer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/">
            <div className="d-flex flex-column min-vh-90 justify-content-center align-items-center">
              <Landing />
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;
