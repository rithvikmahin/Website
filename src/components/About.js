import React from "react"
import Typist from "react-typist"
import AboutList from "./About-List"

function About() {
    return (
        <div id="About">
        <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="terminal">
            <div className="col-lg-16 pt-8 pt-lg-0 content">
              <span className = "text-center">
                <span className="code-styling-2">
                <Typist avgTypingDelay={100}>
                <Typist.Delay ms = {1000} />
                <h3>&#123;"Education": "The University of Illinois at Urbana-Champaign"&#125; </h3>
                </Typist>
                </span>
              </span>
              
                <AboutList />
               
            </div>
          </div>
          </div>
        </section>
      </div>
    )
}

export default About