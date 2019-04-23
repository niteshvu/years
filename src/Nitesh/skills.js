import React, { Component } from 'react';
import codedesign from '../img/code-design.png';
import webdev from '../img/Webdevelopment3-09-512.png';
import design from '../img/design.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
  render() {
    return (
      <div>

        <div className="padding" id="skills" name="skills">
        <div className="container">
        <div className="row">
              <div className="col-sm-4">
                <Flip top><img src={codedesign} className="img-responsive skillsimg"></img></Flip>
                <Fade top><h3 className="img-responsive item" >Languages/Frameworks</h3></Fade>
                <Fade bottom><p className="item">Swift, Objective-C, Java, C, C++, HTML, CSS, JavaScript <br></br> A/B Testing </p></Fade>
              </div>
              <div className="col-sm-4">
              <Flip top><img src={webdev} className="img-responsive skillsimg"></img></Flip>
              <Fade top><h3 className="img-responsive item" >Tools/Operations</h3></Fade>
              <Fade bottom> <p className="item">XCode, JIRA, Confluence, Eclipse, Adobe Target,  Source Tree<br></br> GitHub</p></Fade>
              </div>
              <div className="col-sm-4">
              <Flip top><img src={design} className="img-responsive skillsimg"></img></Flip>
              <Fade top><h3 className="img-responsive item" >Design</h3></Fade>
              <Fade bottom><p className="item">Abode Photoshop, Adobe Illustrator, Sketch <br></br> Wordpress</p></Fade>
              </div>
          </div>
        </div>
        </div>
       
      </div>
    );
  }
}

export default Skills;
