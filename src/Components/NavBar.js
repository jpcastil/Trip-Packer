import React, {Component} from 'react';
import './../App.css';
import Navbar from 'react-bootstrap/Navbar'
import  Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'



/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><i class="fas fa-leaf fa-2x mainColor"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#" style="font-family: 'Short Stack', cursive;">Home <span class="sr-only">(current)</span></a>
            </li>

        </ul>
        <span class=" navbar-text d-none d-md-block">
            <a class="mainFont" href="./login.html" style="color:grey; text-decoration: none;"> Login </a>
        </span>
        <span class=" navbar-text d-none d-md-block">
            <a class="mainFont" href="./login.html" style="color:grey; padding-left: 20px; text-decoration: none;"> Sign Up </a>
        </span>
    </div>
</nav>*/

export default class NavBar extends Component {
    componentDidMount (){
        console.log(this.props)
    }
    render () {

        return (
            <Navbar bg="light" expand="md">
                <FontAwesomeIcon icon={faSuitcase} size="2x" onClick={this.props.goHome}/>
                <Navbar.Brand onClick={this.props.goHome} >Trip Packer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {! this.props.show ? <Nav.Link onClick={this.props.clickLogin}>Login</Nav.Link>: <div></div>}
                    {! this.props.show ? <Nav.Link onClick={this.props.clickSignUp}>Sign Up</Nav.Link>: <div></div>}
                    {this.props.show ?<Nav.Link onClick={this.props.clickLogOut}>Log Out</Nav.Link>: <div></div>}
                </Nav>
              </Navbar.Collapse>

            </Navbar>




        )
    }
}
