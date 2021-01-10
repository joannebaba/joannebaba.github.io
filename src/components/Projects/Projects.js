import React from "react"
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './Projects.css'
import { ReactComponent as GitHub } from "../../images/icons/GitHubOutline.svg"
import proximitySensor from "../../images/ProximitySensor.jpg"
import laserSpeedometer from "../../images/LaserSpeedometer.jpg"
import solarTracker from "../../images/SolarTracker.jpg"
import clue from "../../images/Clue.png"

class Projects extends React.Component {
    render() {
        return(
            <section id="projects" className="projectsPage">
                <Fade bottom duration={1000} delay={500} distance="30px"> 
                    <h2 className="sectionHeader">
                        Projects
                    </h2>
                    <div className="headerLine"/>
                    <div className="projectGridContainer">
                        <Card className="projectCard">
                            <Card.Img variant="top" src={proximitySensor} alt="Proximity sensor PCB"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Proximity Sensor
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    A proximity detection module with an ultrasonic distance sensor and LED indicators.
                                </Card.Text>
                                <Card.Link href="https://github.com/joannebaba/proximity-sensor" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <GitHub className="projectGitHub"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">C, TI MSP430, DipTrace</small>
                            </Card.Footer>
                        </Card>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={solarTracker} alt="Solar tracker with Arduino Uno"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Single-Axis Solar Tracker
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    A solar panel that tracks the sun's projection for renewable energy in third world countries. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">Arduino Uno</small>
                            </Card.Footer>
                        </Card>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={laserSpeedometer} alt="Custom printed holders for laser speedometer"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Laser Speedometer
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    A hallway moniter that detects movement and speed using lasers.
                                </Card.Text>
                                <Card.Link href="https://github.com/joannebaba/laser-speedometer" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <GitHub className="projectGitHub"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">C, Raspberry Pi</small>
                            </Card.Footer>
                        </Card>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={clue} alt="Snapshot of code for Clue player card"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Clue
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    A virtual simulation of the board game Clue in a text-based adventure format.
                                </Card.Text>
                                <Card.Link href="https://github.com/joannebaba/Clue" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <GitHub className="projectGitHub"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">Java</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Fade>
            </section>
        )
    }
}

export default Projects;