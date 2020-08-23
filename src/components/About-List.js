import React from "react"
import Typist from "react-typist"
require("react-typist/dist/Typist.css")

function AboutList() {
    return (
        <div className="row">
                <div className="col-lg-6">
                  <span className = "text-left">
                    <ul>
                      <li><Typist avgTypingDelay={125}><Typist.Delay ms = {1500} /><strong>$ &#123;<span className = "code-styling-1">"Phone Number"</span> : <span className="code-styling-2">"217-390-8358"</span>&#125;</strong> </Typist></li>
                      <li><Typist avgTypingDelay={125}><Typist.Delay ms = {1500} /><strong>$ &#123;<span className = "code-styling-1">"Email Address"</span> : <span className="code-styling-2">"rithvik7@illinois.edu"</span>&#125; </strong></Typist></li>
                      <li><Typist avgTypingDelay={125}><Typist.Delay ms = {1500} /><strong>$ &#123;<span className = "code-styling-1">"Residence"</span> : <span className="code-styling-2">"New York &amp; Illinois"</span>&#125; </strong></Typist></li>
                    </ul>
                  </span>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <span className = "text-right">
                      <li><Typist avgTypingDelay={125}><Typist.Delay ms = {1500} /><strong>&#123;<span className="code-styling-2">"Major"</span> : <span className = "code-styling-1">"Computer Science &amp; Statistics"</span>&#125; $ </strong></Typist></li>
                      <li><Typist avgTypingDelay={125}><Typist.Delay ms = {1500} /><strong>&#123;<span className="code-styling-2">"Graduation Date"</span> : <span className = "code-styling-1">"December 2022"</span>&#125;</strong> $  </Typist></li>
                      <li><Typist avgTypingDelay={125}><Typist.Delay ms = {1500} /><strong>&#123;<span className="code-styling-2">"Programming Experience"</span> : <span className = "code-styling-1">"6 years"</span>&#125;</strong> $  </Typist></li>
                    </span>
                  </ul>
                </div>
              </div>
    )
}

export default AboutList