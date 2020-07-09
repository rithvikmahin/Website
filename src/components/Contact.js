import React, { Component } from "react"

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="section-contact">
                    <h2 className="contact">
                        Contact Me
                    </h2>
                </div>

                <div>
                    <form>

                        <div className="form-group">
                            <label className="label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>

                        <div className="form-group">
                            <label className="label">Subject</label>
                            <input type="text" className="form-control" id="subject" />
                        </div>

                        <div className="form-group">
                            <label className="label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" />
                        </div>

                        <div className="form-group">
                            <label className="label">Description</label>
                            <input type="description" className="form-control" id="email" aria-describedby="description" />
                        </div>

                        <button type="submit" className="submit-button">Submit</button>

                    </form>
                </div>
            </div>
        )
    };
}