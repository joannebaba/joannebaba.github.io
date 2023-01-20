import React from "react"
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './Projects.css';
import { ReactComponent as GitHub } from "../../images/icons/GitHubOutline.svg";
import riscv from "../../images/RISCV.png";
import edgeDetector from "../../images/EdgeDetector.png";
import automaticDoorOpener from "../../images/AutomaticDoorOpener.png";
import intelBoard from "../../images/IntelBoard.jpg";
import proximitySensor from "../../images/ProximitySensor.jpg";
import laserSpeedometer from "../../images/LaserSpeedometer.jpg";
import solarTracker from "../../images/SolarTracker.jpg";
import clue from "../../images/Clue.png";

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
                            <Card.Img variant="top" src={riscv} alt="Diagram of five-stage pipeline for RISC-V ISA"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    RISC-V Processor
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    A 5-stage pipelined processor that implements the RISC-V instruction-set architecture, including forwarding and bypassing.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">Verilog</small>
                            </Card.Footer>
                        </Card>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={edgeDetector} alt="A side-by-side comparison of a grayscale image of a man with a camera, and the same image with only the edges"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Digital Image Processor
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    An edge detector for 8-bit grayscale images using the Kirsch edge detector algorithm.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">VHDL</small>
                            </Card.Footer>
                        </Card>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={automaticDoorOpener} alt="Automatic door opener PCB"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Automatic Door Opener
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    An automatic door opener with programmable trigger levels for proximity to limit contact due to COVID-19.
                                </Card.Text>
                                <Card.Link href="https://github.com/joannebaba/automatic-door-opener" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <GitHub className="projectGitHub"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">C, STM32F401RE, Proteus</small>
                            </Card.Footer>
                        </Card>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={intelBoard} alt="Intel DE1-SoC board"/>
                            <Card.Body>
                                <Card.Title className="projectTitle">
                                    Real-Time Executive
                                </Card.Title>
                                <Card.Text className="projectDescription">
                                    A real-time operating system kernel for an Intel DE1-SoC board with dual-core ARM Cortex-A9 processor and Altera FPGA.
                                    Includes memory and task management, real-time scheduling, and more. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="projectTools">
                                <small className="text-muted">C, assembly</small>
                            </Card.Footer>
                        </Card>
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