import React, {Component} from "react"
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class SkillList extends Component {

    render() {
        const python = 95;
        const javascript = 90;
        const java = 85;
        const cplusplus = 85;
        const mongodb = 85;
        const linux = 80;
        const aws = 80;
        const html = 80;
        const css = 80;

        return (  
        <div id="Skills">
            <div className="section-skills">
              <h2 className="skills">
                Skills
              </h2>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">Python</h3>
                  <CircularProgressbar value={python} text={`${python}%`} strokeWidth={10} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>
                      
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">JavaScript</h3>
                  <CircularProgressbar value={javascript} text={`${javascript}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">Java</h3>
                  <CircularProgressbar value={java} text={`${java}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>

            </div>   

            <div className="row">
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">C++</h3>
                  <CircularProgressbar value={cplusplus} text={`${cplusplus}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>
                      
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">MongoDB</h3>
                  <CircularProgressbar value={mongodb} text={`${mongodb}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">Linux</h3>
                  <CircularProgressbar value={linux} text={`${linux}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>

            </div>   

            <div className="row">
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">AWS</h3>
                  <CircularProgressbar value={aws} text={`${aws}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>
                      
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">CSS</h3>
                  <CircularProgressbar value={css} text={`${css}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">HTML</h3>
                  <CircularProgressbar value={html} text={`${html}%`} styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: `#149ddd`,
                    textColor: '#42d7f5',
                    trailColor: '#fff',
                  })}/>
                </div>
              </div>

            </div>   

        </div>
        )
    }
}

