import React, {Component} from "react"
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class SkillList extends Component {

    render() {
        const python = 95;
        const javascript = 90;
        const java = 85;
        const cplusplus = 85;
        const sql = 85;
        const linux = 80;
        const c = 80;
        const html = 80;
        const css = 80;

        return (  
        <div>

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
                    pathColor: `#118d21`,
                    textColor: '#f88',
                    trailColor: '#f88',
                  })}/>
                </div>
              </div>
                      
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">JavaScript</h3>
                  <CircularProgressbar value={javascript} text={`${javascript}%`} />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">Java</h3>
                  <CircularProgressbar value={java} text={`${java}%`} />
                </div>
              </div>

            </div>   

            <div className="row">
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">C++</h3>
                  <CircularProgressbar value={cplusplus} text={`${cplusplus}%`} />
                </div>
              </div>
                      
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">SQL</h3>
                  <CircularProgressbar value={sql} text={`${sql}%`} />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">Linux</h3>
                  <CircularProgressbar value={linux} text={`${linux}%`} />
                </div>
              </div>

            </div>   

            <div className="row">
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">C</h3>
                  <CircularProgressbar value={c} text={`${c}%`} />
                </div>
              </div>
                      
              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">CSS</h3>
                  <CircularProgressbar value={css} text={`${css}%`} />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="skillbar-width">
                  <h3 className="language">HTML</h3>
                  <CircularProgressbar value={html} text={`${html}%`} />
                </div>
              </div>

            </div>   

        </div>
        )
    }
}

