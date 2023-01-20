import React from "react"
import Fade from 'react-reveal/Fade';

import './Homepage.css'
import { ReactComponent as LinkedIn } from "../../images/icons/LinkedIn.svg"
import { ReactComponent as GitHub } from "../../images/icons/GitHub.svg"
import { ReactComponent as Email } from "../../images/icons/Email.svg"
import { ReactComponent as Resume } from "../../images/icons/Resume.svg"

class Homepage extends React.Component {
    render() {
        return(
            <div className="homepage"> 
                <div className="box">
                    <Fade bottom duration={1000} delay={500} distance="30px">
                        <h1 className="name">
                            Joanne <span className="highlight">Baba</span>
                        </h1>
                    </Fade>
                    <Fade bottom duration={1000} delay={600} distance="30px">
                        <div className="line"/>
                    </Fade>
                    <Fade bottom duration={1000} delay={700} distance="30px">
                        <div className="blurb">
                            Software & Hardware Enthusiast
                        </div>
                    </Fade>
                    <Fade bottom duration={1000} delay={800} distance="30px">
                        <div className="links">
                            <a href="https://www.linkedin.com/in/joannebaba/" target="_blank" rel="noopener noreferrer" className="icon">
                                <LinkedIn className="homepageIcon"/>
                            </a>
                            <a href="https://github.com/joannebaba" target="_blank" rel="noopener noreferrer" className="icon">
                                <GitHub className="homepageIcon"/>
                            </a>
                            <a href="mailto:joannejiangb@gmail.com" className="icon">
                                <Email className="homepageIcon"/>
                            </a>
                            <a href="/static/media/JoanneBabaResume.pdf" target="_blank" rel="noopener noreferrer" className="icon">
                                <Resume className="homepageIcon"/>
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Homepage;