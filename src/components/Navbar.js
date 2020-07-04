import React, {Component} from "react"
import picture from '../assets/images/profile-picture.jpeg' /**TODO: Change image */
import $ from "jquery"

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
              <img src={picture} alt="" className="img-fluid rounded-circle" />s
              <h1 className="text-light"><a href="index.html">Rithvik Mahindra</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://github.com/rithvikmahin" target="_blank" rel="noopener noreferrer" className="github"><i className="bx bxl-github" /></a> 
                <a href="https://www.linkedin.com/in/rithvik-mahindra/" target ="_blank" rel="noopener noreferrer" className="linkedin"><i className="bx bxl-linkedin" /></a>
              </div>
            </div>
            <nav className="nav-menu">
              <ul>
                <li className="active"><a href="index.html"><i className="bx bx-home" /> <span>Home</span></a></li>
                <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
                <li><a href="#experiences"><i className="bx bx-book-content" /> Work Experience</a></li>
                <li><a href="#projects"><i className="bx bx-book-content" /> Projects</a></li>
                <li><a href="#skills"><i className="bx bx-book-content" /> Skills</a></li>
                <li><a href="#contact"><i className="bx bx-envelope" /> Contact Me</a></li>
              </ul>
            </nav>
          </div>
        </header>
        </div>
      )
  }
}
