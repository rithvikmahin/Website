import React, { Component } from "react"
import { Mozilla, CS125, IIMB, Visa, Collagro, Cisco } from "./Work-List"

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
                            <a href="https://github.com/Mozilla-Open-Lab-Etwas/Twitter-Source-Bot" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bxl-github" /></a> 
                        </div>

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <CS125 />
                                </div>
                            </div>
                            <a href="https://github.com/acheng33/data-analysis" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bxl-github" /></a> 
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
                            <a href="https://bangaloremirror.indiatimes.com/bangalore/others/city-students-develop-phone-based-atm/articleshow/63493145.cms" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bx-link" /></a> 
                        </div>

                    </div>

                    <div className="row mb-4">

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Collagro />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Cisco />
                                </div>
                            </div>
                            <a href="http://stanzabooks.herokuapp.com/#!/login" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bx-link" /></a> 
                        </div>

                    </div>

                </div>
            </section>
            </div>
        )
    }
}

