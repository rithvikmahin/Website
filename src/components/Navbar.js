import React, {Component} from "react"
import picture from '../assets/images/profile-picture.jpeg' /**TODO: Change image */
import $ from "jquery"
import Scroll from "react-scroll"
const ScrollLink = Scroll.ScrollLink;

export default class Navigation extends Component {

  MobileNavbar() {
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });
  }

  componentDidMount() {
    this.MobileNavbar()
  }

  render() {
      return (
          <div>
          <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src={picture} alt="" className="img-fluid rounded-circle" />
              <h1 className="text-light"><a href="index.html">Rithvik Mahindra</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://github.com/rithvikmahin" target="_blank" rel="noopener noreferrer" className="github"><i className="bx bxl-github" /></a> 
                <a href="https://www.linkedin.com/in/rithvik-mahindra/" target ="_blank" rel="noopener noreferrer" className="linkedin"><i className="bx bxl-linkedin" /></a>
              </div>
            </div>
            <nav className="nav-menu">
              <ul>
                <li className="navbar-links"><i className="bx bx-home" /> <span>Home</span></li>
                <li className="navbar-links"><i className="bx bx-user" /> <span>About</span></li>
                <li className="navbar-links"><i className="bx bx-code-block" /> Work Experience</li>
                <li className="navbar-links"><i className="bx bxs-card" /> Projects</li>
                <li className="navbar-links"><i className="bx bx-book-content" /> Skills</li>
                <li className="navbar-links"><i className="bx bx-envelope" /> Contact Me</li>
              </ul>
            </nav>
          </div>
        </header>
        </div>
      )
  }
}
