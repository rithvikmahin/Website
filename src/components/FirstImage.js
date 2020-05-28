import React from "react"
import Typist from "react-typist"
import Anime from "react-anime"

function FirstImage() {
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
                <Anime easing="easeOutElastic"
                    duration={1000}
                    direction="alternate"
                    loop={true}
                    delay={(el, index) => index * 240}
                    translateX='13rem'
                    scale={[1, 1]}>
                    <div className="squareOne"/>
                </Anime>
                <Anime easing="easeOutElastic"
                    duration={1000}
                    direction="alternate"
                    loop={true}
                    delay={(el, index) => index * 240}
                    translateX='13rem'
                    scale={[1, 1]}>
                    <div className="squareTwo"/>
                </Anime>
                </h2>
            </div>
            </section>
        </div>
    )
}

export default FirstImage