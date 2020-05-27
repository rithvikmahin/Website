import React from "react"
import Typist from "react-typist"

function Hero() {
    return (
        <div>
            <section id="firstImage" className="d-flex flex-column justify-content-center align-items-center">
            <div className="firstImage-container">
                <h1>Rithvik Mahindra</h1>
                <h2>
                <Typist> 
                    I am a developer!
                    <Typist.Backspace count={17} delay={300} />
                    Thank you for visiting my site!
                    <Typist.Backspace count={35} delay={300} />
                </Typist>
                </h2>
            </div>
            </section>
        </div>
    )
}

export default Hero