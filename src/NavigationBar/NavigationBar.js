import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './NavigationBar.css';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userName: ''
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            console.log(user ? user.displayName : 'no user data')
            this.setState(() => {
                return {
                    isLoggedIn: user ? true : false,
                    userName: user ? user.displayName : ''
                };
            });
        });
    }

    signIn = () => {
        auth.signInWithPopup(provider);
    }

    signOut = () => {
        auth.signOut();
    }

    render() {
        return (
            <ul className="navigation-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                {!this.state.isLoggedIn && <li><a href="#signin" onClick={this.signIn}>Sign In</a></li>}
                {this.state.isLoggedIn && <li><a href="#signout" onClick={this.signOut}>Welcome {this.state.userName}</a></li>}
            </ul>
        );
    }
}

export default NavigationBar;
