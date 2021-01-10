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
                        <Tabs fill defaultActiveKey="work3" id="workExperienceTabs" className="experienceTabContainer">
                            <Tab eventKey="work3" title="Ford" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    <b>Android Developer | <span className="highlight">Ford Motor Company</span></b>
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
                                        Implemented custom components to overcome Android limitations and support design infrastructure
                                    </li>
                                    <li>
                                        Developed POC and initial widget designs based on hero screens in InVision to incorporate into AOSP
                                    </li>
                                    <li>
                                        Created test apps to optimize development process by significantly reducing build time cost
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="work2" title="Ford" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    <b>Software Developer | <span className="highlight">Ford Motor Company</span></b>
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
                                        Single-handedly implemented an end-to-end feature by reverse-engineering API calls for diagnostics
                                    </li>
                                    <li>
                                        Analyzed and significantly reduced performance data by refactoring with Flow.js to remove legacy code
                                    </li>
                                    <li>
                                        Consistently part of top 10 code contributors for large-scale project across team of over 200 members 
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="work1" title="UW" tabClassName="experienceTab">
                                <div className="jobTitle">
                                    <b>Embedded Design and Business Workflows Co-op | <span className="highlight">University of Waterloo</span></b>
                                </div>
                                <div className="date">
                                    May - Aug 2019
                                </div>
                                <ul className="jobDescription">
                                    <li>
                                        Developed compliant CEAB accreditation deliverables requiring extensive attention to detail with Excel
                                    </li>
                                    <li>
                                        Created custom component footprint and schematic library in DipTrace by analyzing module datasheets
                                    </li>
                                    <li>
                                        Automated purchasing process by developing VBA programs for data manipulation and list generation
                                    </li>
                                    <li>
                                        Designed and fabricated an ultrasonic distance sensor PCB prototype using a TI MSP430 microcontroller
                                    </li>
                                    <li>
                                        Linked GUI and SQL using PHP, JSON, and Git for the Faculty of Engineering accreditation database 
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