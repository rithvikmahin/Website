import React, { Component } from "react"
import Typist from "react-typist"
import mozilla from "../assets/images/mozilla.png"
import uiuc from "../assets/images/uiuc.jpg"


export default class WorkExperience extends Component {
    render() {
        return (
            <div>
                <div className="section-work">
                    <h2 className="work">
                        Work Experience
                    </h2>
                </div>
               
            <section id="work" className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <span className = "text-center">
                                        <span>
                                            <Typist>
                                            <Typist.Delay ms = {1000} />
                                                <h3><span className="terminal-styling">Mozilla</span></h3>
                                            </Typist>
                                        </span>
                                    </span>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <span className = "text-center">
                                        <span>
                                            <Typist>
                                            <Typist.Delay ms = {1000} />
                                                <h3><span className="terminal-styling">Mozilla</span></h3>
                                            </Typist>
                                        </span>
                                    </span>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

