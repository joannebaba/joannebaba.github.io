import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './About.css'
import profile from "../../images/Profile.png"

class About extends React.Component {
    render() {
        return(
            <section id="about">
                <Fade bottom duration={1000} delay={500} distance="30px">                
                    <h2 className="sectionHeader">
                        About
                    </h2>
                    <div className="headerLine"/>
                    <Container className="aboutSection">
                        <Row className="justify-content-md-center">
                            <Col lg={true} className="profile">
                                <Image src={profile} alt="Headshot of Joanne Baba" className="profilePic"/>
                            </Col>
                            <Col lg={true} className="aboutInfo">
                                <p>
                                    <span className="aboutName">Hello! My name is <span className="highlight">Joanne</span>.</span>
                                </p>
                                <p>
                                    I'm a 4B Computer Engineering student at the <span className="highlight">University of Waterloo</span>. 
                                </p>
                                <p>
                                    I have a passion for problem solving and am always eager to learn new things. Whether it's work, school, 
                                    or personal projects, I always put my best foot forward. 
                                    In particular, I'm interested in <span className="highlight">digital hardware</span> and <span className="highlight">RTL design</span>.
                                </p>
                                <p>
                                    Currently I am looking for <span className="highlight">Computer Engineering</span> full-time positions for new graduates
                                    starting June 2023.
                                    Check out my website and <a className="highlight" href="/static/media/JoanneBabaResume.pdf" target="_blank" rel="noopener noreferrer">resume</a>, and contact me if you're interested!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </section>
        )
    }
}

export default About;