import React, { Component } from "react"
import { Esri, AGCO, Kilo, MozillaSummer, MozillaSpring, CS125, IIMB, Visa, Collagro, Cisco } from "./Work-List"
import { 
    EsriJson,
    AGCOJson,
    KiloJson,
    MozillaSummerJson,
    MozillaSpringJson, 
    CS125Json, 
    IIMBJson, 
    VisaJson, 
    CollagroJson, CiscoJson 
} from "../json/experience"

export default class WorkExperience extends Component {
    render() {
        return (
            <div id="Work">
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
                                    <Esri content={EsriJson} />
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <AGCO content={AGCOJson} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Kilo content={KiloJson} />
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <MozillaSummer content={MozillaSummerJson} />
                                </div>
                            </div>
                            <a href="https://github.com/modfy/modfy.video" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bxl-github" /></a> 
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <MozillaSpring content={MozillaSpringJson} />
                                </div>
                            </div> 
                            <a href="https://github.com/Mozilla-Open-Lab-Etwas/Twitter-Source-Bot" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bxl-github" /></a> 
                        </div>
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <CS125 content={CS125Json} />
                                </div>
                            </div>
                            <a href="https://github.com/acheng33/data-analysis" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bxl-github" /></a> 
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <IIMB content={IIMBJson} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Visa content={VisaJson} />
                                </div>
                            </div>
                            <a href="https://bangaloremirror.indiatimes.com/bangalore/others/city-students-develop-phone-based-atm/articleshow/63493145.cms" target="_blank" rel="noopener noreferrer" className="links"><i className="bx bx-link" /></a> 
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Collagro content={CollagroJson} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">  
                            <div className="work-terminal">
                                <div className="col-lg-16 pt-8 pt-lg-0 content">
                                    <Cisco content={CiscoJson} />
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

