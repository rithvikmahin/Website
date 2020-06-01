import React from "react"
import picture from '../assets/images/profile-picture.jpeg' /**TODO: Change image to mine */

function Navbar() {
    return (
        <div>
        <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={picture} alt="" className="img-fluid rounded-circle" />s
            <h1 className="text-light"><a href="index.html">Rithvik Mahindra</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/rithvikmahin" target="_blank" className="github"><i className="bx bxl-github" /></a> 
              <a href="https://www.linkedin.com/in/rithvik-mahindra/" target ="_blank" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active"><a href="index.html"><i className="bx bx-home" /> <span>Home</span></a></li>
              <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
              <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
              <li><a href="#portfolio"><i className="bx bx-book-content" /> Portfolio</a></li>
              <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      </div>
    )
}

export default Navbar