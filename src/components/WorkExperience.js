import React, { Component } from "react"
import { Mozilla, CS125, IIMB, Visa } from "./Work-List"

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
                    <div className="row mb-4">

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Mozilla />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <CS125 />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mb-4">

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <IIMB />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Visa />
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

