import React, { Component } from "react"

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Subject: "",
            Email: "",
            Description: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
    
    handleSubmit(event) {
        //TODO: Add event.preventDefault back to the page, and find a solution to issue #25.
        //event.preventDefault();
        //Replace with environment variable
        const templateId = "template_E5uJH9Gr";
        this.sendFeedback(templateId, {description: this.state.Description, subject: this.state.Subject, email: this.state.Email, name: this.state.Name});
        this.setState({Name: "", Subject: "", Email: "", Description:""})
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
        'outlook', templateId,
        variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.error('Error occurred while sending the email with error: ', err))
    }
    

    handleNameChange(event) {
        this.setState({ Name: event.target.value })
    }

    handleSubjectChange(event) {
        this.setState({ Subject: event.target.value })
    }

    handleEmailChange(event) {
        this.setState({ Email: event.target.value })
    }

    handleDescriptionChange(event) {
        this.setState({ Description: event.target.value })
    }

    render() {
        return (
            <div id="Contact">
                <div className="section-contact">
                    <h2 className="contact">
                        Contact Me
                    </h2>
                </div>

                <div>
                    <form>

                        <div className="form-group">
                            <label className="label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={this.handleNameChange} value={this.state.Name}/>
                        </div>

                        <div className="form-group">
                            <label className="label">Subject</label>
                            <input type="text" className="form-control" id="subject" onChange={this.handleSubjectChange} value={this.state.Subject}/>
                        </div>

                        <div className="form-group">
                            <label className="label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" onChange={this.handleEmailChange} value={this.state.Email}/>
                        </div>

                        <div className="form-group">
                            <label className="label">Description</label>
                            <textarea type="text" className="form-control" id="description" aria-describedby="description" onChange={this.handleDescriptionChange} value={this.state.Description}/>
                        </div>

                        <div className="col text-center">
                            <button type="submit" style={{marginBottom: "10px"}} onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}