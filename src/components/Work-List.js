import React, { Component } from "react"
import Typist from "react-typist"
require("react-typist/dist/Typist.css")

export class Mozilla extends Component {
    render() {
      return (
          <div className="row">

            <div className="col-lg-6">
              <span className = "text-nowrap">
                <ul>
                  <li><Typist><Typist.Delay ms = {1500} /><strong>$ Loading... <Typist.Backspace count={11} delay={500} />Mozilla</strong></Typist></li>
                  <li><strong>$ Developer in the Spring Open Lab </strong> </li>
                  <li><strong>$ April 2020 - June 2020 | Remote </strong> </li>
                </ul>
              </span>
            </div>
          </div>
      )
    }
}

export class CS125 extends Component {
    render() {
      return (
          <div className="row">

            <div className="col-lg-6">
              <span className = "text-nowrap">
                <ul>
                  <li><Typist><Typist.Delay ms = {1500} /><strong>$ Loading... <Typist.Backspace count={11} delay={500} />CS 125 - Introduction to Computer Science</strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ Course Developer for the class CS 125 </span></strong> </li>
                  <li><strong>$ February 2020 - Ongoing | Champaign </strong> </li>
                </ul>
              </span>
            </div>
          </div>
      )
    }
}
