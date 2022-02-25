import React, { Component }from 'react';
import {Button} from '../Button';
import './Navbar.css';
import {Link} from 'react-scroll'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><Link to="/">JohnDoe</Link></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu' : 'nav-menu active'}>
                    <Link to="hero" spy={true} smooth={true} offset={-15} duration={500} onSetActive={this.handleSetActive}>
                        <li className="nav-links">
                            Home
                        </li>
                    </Link>
                    <Link to="/product" spy={true} smooth={true} offset={-15} duration={500} onSetActive={this.handleSetActive}>
                        <li className="nav-links">
                            Productos
                        </li>
                    </Link>
                    <Link to="nosotros" spy={true} smooth={true} offset={-15} duration={500} onSetActive={this.handleSetActive}>
                        <li className="nav-links">
                            Nosotros
                        </li>
                    </Link>
                    <Link to="contacto" spy={true} smooth={true} offset={-15} duration={500} onSetActive={this.handleSetActive}>
                        <li className="nav-links">
                            Contacto
                        </li>
                    </Link>
                    
                    
                </ul>
                <div className="buttons"> 
                    <Button><i class="fas fa-shopping-cart"></i></Button>
                    <Button><i class="fas fa-user"></i></Button>
                </div>
                
            </nav>
        )
    }
}

export default Navbar;