import React, { Component } from "react"

export default class ProjectList extends Component {

    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-6">
                        <iframe src="https://uiuc-course-visualizer.herokuapp.com/" width="1125" height="500" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}