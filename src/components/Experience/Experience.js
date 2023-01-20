import React from "react"
import { Container, Tabs, Tab } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './Experience.css'

class Experience extends React.Component {
    render() {
        return(
            <section id="experience" className="experiencePage">
                <Fade bottom duration={1000} delay={500} distance="30px"> 
                    <h2 className="sectionHeader">
                        Experience
                    </h2>
                    <div className="headerLine"/>
                    <Container className="experienceContainer">
                        <Tabs fill defaultActiveKey="work4" id="workExperienceTabs" className="experienceTabContainer">
                            <Tab eventKey="work4" title="Microsoft" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    Silicon Design Engineer | <span className="highlight">Microsoft</span>
                                </div>
                                <div className="date">
                                    September - December 2022
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Designed RAS parity protection for AXI bus interface in security processor as an IP owner using Verilog
                                    </li>
                                    <li>
                                        Enhanced performance and security capabilities by supporting multiple outstanding AXI bus transactions
                                    </li>
                                    <li>
                                        Collaborated with verification and architecture teams to review design specifications and documentation
                                    </li>
                                </ul>
                                <div className="jobTitle">
                                    Silicon Design Engineer | <span className="highlight">Microsoft</span>
                                </div>
                                <div className="date">
                                    January - April 2022
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Implemented RTL power optimization in Verilog for crypto IP in Microsoft Pluton security processor
                                    </li>
                                    <li>
                                        Reduced total power consumption in crypto IP by 93% through active power analysis from waveforms
                                    </li>
                                    <li>
                                        Improved overall design clock gating efficiency by 100% by increasing dynamic clock gating coverage
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="work3" title="SIE" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    Software Developer | <span className="highlight">Sony Interactive Entertainment</span>
                                </div>
                                <div className="date">
                                    May - August 2021
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Enhanced and maintained PlayStation 5 game and application library with React Native and TypeScript
                                    </li>
                                    <li>
                                        Spearheaded development of configurable API sandbox app to facilitate early-stage debugging process
                                    </li>
                                    <li>
                                        Increased functional and component unit test coverage across multiple repositories using Jest and Enzyme 
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="work2" title="Ford" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    Android Developer | <span className="highlight">Ford Motor Company</span>
                                </div>
                                <div className="date">
                                    Sep - Dec 2020
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Key team contributor to early-stage HMI project using Kotlin, Java, and XML in Android environment 
                                    </li>
                                    <li>
                                        Developed large-scale framework and media app prototype complying with AOSP theming techniques
                                    </li>
                                    <li>
                                        Created test apps to optimize development process by significantly reducing build time cost
                                    </li>
                                </ul>
                                <div className="jobTitle">
                                    Software Developer | <span className="highlight">Ford Motor Company</span>
                                </div>
                                <div className="date">
                                    Jan - Apr 2020
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Developed touchscreen interface for infotainment system in the Ford All-Electric Mustang Mach-E
                                    </li>
                                    <li>
                                        Debugged and enhanced vehicle settings using React, JavaScript, and Redux in an Agile environment
                                    </li>
                                    <li>
                                        Analyzed and significantly reduced performance data by refactoring with Flow to remove legacy code
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="work1" title="UW" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    Embedded Design and Business Workflows Co-op | <span className="highlight">University of Waterloo</span>
                                </div>
                                <div className="date">
                                    May - Aug 2019
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Created custom component footprint and schematic library in DipTrace by analyzing module datasheets
                                    </li>
                                    <li>
                                        Designed and fabricated an ultrasonic distance sensor PCB prototype using a TI MSP430 microcontroller
                                    </li>
                                    <li>
                                        Linked GUI and SQL using PHP and JSON for the Faculty of Engineering accreditation database 
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </Container>
                </Fade>
            </section>
        )
    }
}

export default Experience;