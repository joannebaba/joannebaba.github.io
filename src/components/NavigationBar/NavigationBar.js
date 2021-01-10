import React from "react"
import { Nav, Navbar } from 'react-bootstrap';

import './NavigationBar.css';
import logo from "../../images/Logo.png"
import { ReactComponent as Hamburger } from "../../images/icons/Hamburger.svg"
import { ReactComponent as Cancel } from "../../images/icons/Cancel.svg"

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            navExpanded: false,
            atTop: true,
        };

        this.setExpanded = this.setExpanded.bind(this);
        this.setCollapsed = this.setCollapsed.bind(this);
    }

    componentDidMount() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", e => this.handleScroll(e));
    }
    
    handleScroll = (e) => {
        const window = e.currentTarget;
    
        this.setState({
            show: this.prev > window.scrollY,
            atTop: !window.scrollY
        });

        this.prev = window.scrollY;
    };

    setExpanded(expanded) {
        this.setState({
            navExpanded: expanded
        });
    };

    setCollapsed() {
        this.setState({
            navExpanded: false
        });
    };

    render() {
        return(
            <Navbar collapseOnSelect 
                    expand="lg" 
                    className={this.state.atTop ? "defaultNav" : (this.state.show || this.state.navExpanded ? "activeNav" : "hiddenNav")}
                    onToggle={this.setExpanded}
                    expanded={this.state.navExpanded}>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbarMenu">
                    {this.state.navExpanded ? <Cancel /> : <Hamburger />}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" onSelect={this.setCollapsed}>
                        <Nav.Link href="#about" className="navbarLink">
                            About
                        </Nav.Link>
                        <Nav.Link href="#experience" className="navbarLink">
                            Experience
                        </Nav.Link>
                        <Nav.Link href="#projects" className="navbarLink">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#contact" className="navbarLink">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;