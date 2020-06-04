import React from "react"
import Typist from "react-typist"
import AboutList from "./About-List"

function About() {
    return (
        <div>
        <section id="about" class="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div>
            <div className="col-lg-16 pt-8 pt-lg-0 content">
              <span className = "text-center">
                <span className="text-nowrap">
                <Typist>
                <Typist.Delay ms = {1000} />
                  <h3>&#123;<span className="code-styling-2">"Education"</span> : <span className="code-styling-1">"The University of Illinois at Urbana-Champaign"</span>&#125; </h3>
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