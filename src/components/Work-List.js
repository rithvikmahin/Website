import React, { Component } from "react"
import Typist from "react-typist"
require("react-typist/dist/Typist.css")

export class Mozilla extends Component {
    render() {
      return (
          <div className="row">

            <div className="col-lg-12">
                <ul>
                  <li><Typist><Typist.Delay ms = {3000} /><strong><span className="terminal-wrapping-title">$ Loading... <Typist.Backspace count={11} delay={500} />{this.props.content.id}</span></strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ {this.props.content.title} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.duration_location} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.tools}</span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.description} </span></strong> </li>
                </ul>
            </div>
          </div>
      )
    }
}

export class CS125 extends Component {
    render() {
      return (
          <div className="row">

            <div className="col-lg-12">
              <ul>
                  <li><Typist><Typist.Delay ms = {3000} /><strong><span className="terminal-wrapping-title">$ Loading... <Typist.Backspace count={11} delay={500} />{this.props.content.id}</span></strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ {this.props.content.title} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.duration_location} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.tools}</span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.description} </span></strong> </li>
                </ul>
            </div>
          </div>
      )
    }
}

export class IIMB extends Component {
  render() {
    return (
        <div className="row">

          <div className="col-lg-12">
              <ul>
                  <li><Typist><Typist.Delay ms = {3000} /><strong><span className="terminal-wrapping-title">$ Loading... <Typist.Backspace count={11} delay={500} />{this.props.content.id}</span></strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ {this.props.content.title} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.duration_location} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.tools}</span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.description} </span></strong> </li>
              </ul>
          </div>
        </div>
    )
  }
}

export class Visa extends Component {
  render() {
    return (
        <div className="row">

          <div className="col-lg-12">
                <ul>
                  <li><Typist><Typist.Delay ms = {3000} /><strong><span className="terminal-wrapping-title">$ Loading... <Typist.Backspace count={11} delay={500} />{this.props.content.id}</span></strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ {this.props.content.title} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.duration_location} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.tools}</span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.description} </span></strong> </li>
              </ul>
          </div>
        </div>
    )
  }
}

export class Collagro extends Component {
  render() {
    return (
        <div className="row">

          <div className="col-lg-12">
          <ul>
                  <li><Typist><Typist.Delay ms = {3000} /><strong><span className="terminal-wrapping-title">$ Loading... <Typist.Backspace count={11} delay={500} />{this.props.content.id}</span></strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ {this.props.content.title} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.duration_location} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.tools}</span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.description} </span></strong> </li>
                </ul>
          </div>
        </div>
    )
  }
}

export class Cisco extends Component {
  render() {
    return (
        <div className="row">

          <div className="col-lg-12">
          <ul>
                  <li><Typist><Typist.Delay ms = {3000} /><strong><span className="terminal-wrapping-title">$ Loading... <Typist.Backspace count={11} delay={500} />{this.props.content.id}</span></strong></Typist></li>
                  <li><strong><span className="terminal-wrapping">$ {this.props.content.title} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.duration_location} </span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.tools}</span></strong> </li>
                  <li><strong><span className="terminal-wrapping"> $ {this.props.content.description} </span></strong> </li>
                </ul>
          </div>
        </div>
    )
  }
}
