import React, {Component} from "react"
import SkillBar from "react-skillbars"

export default class SkillList extends Component {
    render() {
        const languagesLeft = [
            {type: "Python", level: 95}, 
            {type: "JavaScript", level: 90}, 
            {type: "Java", level: 85},
            {type: "Linux", level: 80},
    ];

    const languagesRight = [
      {type: "C++", level: 85},
      {type: "SQL", level: 85},
      {type: "HTML/CSS", level: 80},
      {type: "C", level: 80},
];

        const colors = {
            "bar": {
              "hue": 150,
              "saturation": 50,
              "level": {
                "minimum": 30,
                "maximum": 70
              }
            },
            "title": {
              "text": {
                "hue": 45,
                "saturation": {
                  "minimum": 30,
                  "maximum": 70
                },
                "level": 50
              },
              "background": {
                "hue": 150,
                "saturation": {
                  "minimum": 50,
                  "maximum": 70
                },
                "level": {
                  "minimum": 30,
                  "maximum": 70
                }
              }
            }
          }

        return (  
        <div>
          <div className="section-skills">
            <h2 className="skills">
              Skills
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="skillbars" style={{textAlign: "center"}}>
                <div className="skillbar-width">
                    <SkillBar skills={languagesLeft} colors={colors}/>
                </div>
              </div>
            </div>
                    
            <div className="col-lg-6">
              <div className="skillbars" style={{textAlign: "center"}}>
                <div className="skillbar-width">
                    <SkillBar skills={languagesRight} colors={colors}/>
                </div>
              </div>
          </div>
        </div>   
      </div>
        )
    }
}

