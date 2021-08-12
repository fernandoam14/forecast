import React, { Component } from 'react';

class Navbar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 mx-4 h1">Previsão do Tempo na Região Sudeste</span>
            </nav>
        );
    }
}
export default Navbar;
