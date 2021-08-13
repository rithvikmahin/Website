import React, { Component } from "react"
import ProjectList from "./Project-List"

export default class Projects extends Component {
    render() {
        return (
            <div id="Projects">
                <div className="section-projects">
                    <h2 className="projects">
                        Projects
                    </h2>
                    <ProjectList />
                </div>
            </div>
        )
    };
}