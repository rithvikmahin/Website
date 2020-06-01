import React from "react"
import Typist from "react-typist"

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
                  <h3>&#123;"Education" : "The University of Illinois at Urbana-Champaign"&#125;</h3>
                </Typist>
                </span>
              </span>
              <div className="row">
                <div className="col-lg-6">
                  <span className = "text-center">
                    <ul>
                      <li><Typist><Typist.Delay ms = {1200} /><i className="icofont-rounded-right"/><strong>&#123;"Phone Number" : "217-390-8358"&#125;</strong></Typist></li>
                      <li><Typist><Typist.Delay ms = {1200} /><i className="icofont-rounded-right" /> <strong>&#123;"Email Address" " "rithvik7@illinois.edu"&#125;</strong></Typist></li>
                      <li><Typist><Typist.Delay ms = {1200} /><i className="icofont-rounded-right" /> <strong>&#123;"Residence" : "New York &amp; Illinois"&#125;</strong></Typist></li>
                    </ul>
                  </span>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <span className = "text-center">
                      <li><Typist><Typist.Delay ms = {1200} /><i className="icofont-rounded-left" /> <strong>&#123;"Major" : "Computer Science &amp; Statistics"&#125;</strong></Typist></li>
                      <li><Typist><Typist.Delay ms = {1200} /><i className="icofont-rounded-left" /> <strong>&#123;"Graduation Date" : "December 2022"&#125;</strong></Typist></li>
                      <li><Typist><Typist.Delay ms = {1200} /><i className="icofont-rounded-left" /> <strong>&#123;"Programming Experience" : "6 years"&#125;</strong></Typist></li>
                    </span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    )
}

export default About