import React from "react"
import { Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './Contact.css'

class Contact extends React.Component {
    render() {
        return(
            <section id="contact" className="contactPage">
                <Fade bottom duration={1000} delay={500} distance="30px"> 
                    <h2 className="sectionHeader">
                        Contact Me
                    </h2>
                    <div className="headerLine"/>
                    <Container className="contactContainer">
                        <div className="contactBlurb">
                            Thanks for checking out my website! I'm always looking for new opportunities, or simply down for a chat. 
                        </div>
                        <Button href="mailto:joannejiangb@gmail.com" className="contactButton" size="lg" variant="info">
                            Let's Get in Touch! 
                        </Button>
                    </Container>
                </Fade>
            </section>
        )
    }
}

export default Contact;