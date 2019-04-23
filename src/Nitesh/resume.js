import React, { Component } from 'react';
import pp from '../img/pp.jpeg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import file from '../img/Nithin_Resume.doc'
import './resume.css'


class Resume extends Component {



  goHome = () => {
    // console.log('hi');
    return <Redirect to='/home' />
  }
  render() {
    return (
      <div>
        <div className = "buttonsContainer">
          <Link className="btn btn-default backtohome" to="/home"><span className="glyphicon glyphicon-home"></span> Back to Home</Link>
          <a className="btn btn-default download" href = {file}>Download<span className="glyphicon glyphicon-download-alt"></span></a> 
        </div>
        <div className="container col-xs-12 visible-xs resumexs">
            <div className="row">
              <div className="col-xs-12">
              <Fade><img src={pp} className="img-responsive pp"></img></Fade>
              <Fade><h1><strong>Nithin</strong><br></br>Dampetla</h1></Fade>
              <Fade><h3>iOS App Developer</h3><br></br></Fade>
              <hr></hr>
              <Fade><h4>About</h4><br></br></Fade>
              <Fade><p>A versatile iOS App developer with 3 years of experience designing, developing and managing complex iOS Applications and Web based Technologies. By having	Proficient knowledge of Programming Experience in Object Oriented Programming concepts using Swift and Objective-C</p></Fade>
              <hr></hr>
              <Fade><h4>Experience in</h4><br></br></Fade>
              <Fade><ul>
                <li>field of design, development and analysis of web applications around 2 years.</li>
                <li>HTML5, CSS3, Angular 4, ReactJS, Redux, JavaScript (ES6), jQuery, NodeJS, SASS, Bootstrap, Firebase</li>
                <li>Karma, Chrome Developer Tools, React Developer Tools</li>
                <li>Object Oriented Design</li>
                <li>Passionate in both design and development</li>
                <li>Adobe Photoshop, Illustrator, Lightroom, Sketch</li>
              </ul></Fade>
              <hr></hr>
              <Fade><h4>Professional Experience</h4></Fade><br></br>
              <Fade><p><strong>Walt Disney Parks and Resorts, CA</strong></p></Fade>
              <Fade><p><strong>iOS App Developer</strong></p></Fade>
              <Fade><p>As part of Disney’s Digital Testing - Optimization team, I worked on implementing an innovative technology to improve the guests experience called Content testing, which is a marketing strategy used to determine the most effective content in terms of sales. Two versions of a single page in the application are compared against each other to determine which one performs better. This is typically done by testing a random user’s response to variant A against variant B, and determining which of the two variants is more effective and implement that variant permanently. </p></Fade>
              <Fade><ul>
                <li>Participate in SCRUM meetings along with developers, testers, product owners to deliver the right value of project and discuss the progress of the project in sprints</li>
                <li>Took part of developing a feature used by millions of people in the US. </li>
                <li>Collecting requirements from Business Analysts and analyzing the complexity of the new implementation and suggest better ways to perform a task.</li>
                <li>Coordinating with the design team to define the user interface (UI/UX) requirements for the application.</li>
                <li>Create Implementation Box(mBox) in Adobe Target with multiple experiences for every A/B test.</li>
                <li>Created a Networking Manager to make network calls to Adobe Target with mBox and store the data received in the models.</li>
                <li>Modify the UI based on the data in the models using MVC Architecture.</li>
                <li>Worked with cocoapods and carthage dependency managers. </li>
                <li>Used Multithreading and GCD concepts for faster response of the application.</li>
                <li>Developed the code in object-oriented manner for optimal code re­usability using Swift 4.0.</li> 
                <li>Discuss an action plan to make sure that it is easy to remove the code written for developing an A/B test as we run the code temporarily, typically a month to track the Analytics.</li> 
                <li>Develop Unit Tests using test cases to make sure the A/B test is not breaking any of the existing flow.</li> 
                <li>Took care of Code Review, Code Fixes and bug Fixes.</li>
                <li>Update task status, Bug reports and furnishing Backlogs in JIRA using timely Backlog review session with team.</li> 
                <li>Used Git for version control and pushing code changes periodically.</li>
              </ul></Fade>
              <br></br>
              <Fade><p><strong>Freelance iOS App Developer</strong></p></Fade>
              <Fade><p><strong><a href="https://itunes.apple.com/us/app/gizmos-today/id1369631289?mt=8">https://itunes.apple.com/us/app/gizmos-today/id1369631289?mt=8</a></strong></p></Fade>
              <Fade><p>Worked on developing some apps, one of which is Gizmos Today, where one can find all the happenings in the tech world related to smartphones, laptops, IoT products, wearables and more. Users can discover what's new and trending in the tech space on the move. </p></Fade>
              <Fade><ul>
                <li>Develop native iOS products compatible with iPhone and iPad using Swift.</li>
                <li>Implemented Third party library Alamofire to make network calls using cocoapods. </li>
                <li>Used CoreData to implement data persistence on the devices without making network calls when necessary.</li> 
                <li>Integrated a web-based content made with HTML5 on a Native app using UIWebViews in one of the screens.</li>
                <li>Implemented gradient view for the Menu screen including the animations to display the menu items.</li> 
                <li>Created and customized table views, pop-over views, collection views and navigation bars.</li>
                <li>Implemented singleton design pattern while developing the application.</li>
                <li>Worked with Constraints using Interface Builder with Autolayout.</li>
                <li>Implemented GCD (Grand Central Dispatch) and closures to have a responsive UI.</li> 
                <li>Implemented the search functionality to search for an article in the app.</li>  
                <li>Worked on implementing the Apple Push Notification service.</li>
                <li>Worked with RESTful web services and parse the JSON to dynamically display the data.</li> 
                <li>Performed Unit Testing by writing various test cases.</li>
                <li>Worked with GIT to checkout and update the code changes.</li>
                <li>Published the app on App Store and Distributed build for Adhoc and App store configurations for testing.</li>
              </ul></Fade>
              <br></br>
              <Fade><p><strong>iOS App Developer</strong></p><p className = "years">(2012)</p></Fade>
              <Fade><p><strong>Tyche IT Consulting, India</strong></p></Fade>
              <Fade><p>Tyche IT Consulting specializes in investments in the software, data, & technology industries, working with companies who have a long-term perspective. I developed iOS Applications for multiple clients, some of which are based on ecommerce, health care and gaming. Tchye IT Consulting is available for hire to work on projects for iOS.  </p></Fade>
              <Fade><ul>
                <li>Involved in business analysis, design, coding and testing phases on application.</li>
                <li>Deliver projects with High Quality and High Performance. </li>
                <li>Made decisions on Layout Design for better User Experience and developed UI Accordingly.</li>
                <li>Communicated with business team regularly, provided status reports, discussed the needs and provided possible solutions whenever necessary.</li>
                <li>Performed all tasks from UI design and implementation to writing code for various features.</li>
                <li>Developed interactive views with functionalities like UICollectionView, UIScrollView and Navigation Bar Controller.</li>
                <li>Worked extensively with Objective C, Swift and Auto layout.</li>
                <li>Integrated various Restful Web services call to application.</li>
                <li>Created models in MVC and development of delegates for updating model information and created hybrid apps.</li>
                <li>Created various views, table views, customized views and popovers.</li>
                <li>Pre-fetching data for smooth screen transitioning.</li>
                <li>Used Agile Development methodology of software development.</li>
                <li>Participated in bi­weekly Sprint planning and daily scrum meetings.</li>
                <li>Used GitHub for Version control.</li>
              </ul></Fade>
              <br></br>
              <Fade><p><strong>Shoppy Retail & Technology Services Pvt. Ltd, India</strong></p></Fade>
              <Fade><p><strong>Web Developer (Intern)</strong></p></Fade>
              <Fade><p>Worked as a Web developer for an e-commerce site named oyeshoppy and experienced Magento environment. The purpose of this site is to provide users with variety of items that they can choose to buy. It also provides a portal for sellers to post their products to users, providing the sellers and buyers a medium to sell and buy the goods respectively.</p></Fade>
              <Fade><ul>
                <li>Worked intensively with the business analyst to collect the requirements.</li>
                <li>Developed and designed new Web Interfaces, layouts and Extensions.</li>
                <li>Worked mostly in the front end with various pages to display the products.</li>
                <li>Developed a calculator for seller in order to track their profits.</li>
                <li>Worked in designing a module in which an affiliate member can get an affiliate link which can be used in other sites.</li>
                <li>Worked in creating a module in which seller can submit their request on particular brand and category to admin and then admin verifies and approves the request.</li>
                <li>Worked with UI team to design the icons, Custom Vies, View Transitions, animations for the pages.</li>
                <li>Used GitHub as a repository.</li>
              </ul></Fade>
              <hr></hr>
              <Fade><h4>Research Projects</h4></Fade><br></br>
              <Fade><p><strong>Gizmos Today</strong></p></Fade>
              <Fade><p><strong>www.gizmostoday.com</strong></p></Fade>
              <Fade><p>Developed and designed an interactive website which provides the latest news related to technology. Worked as a Technical Content Writer and wrote several articles for Gizmos Today. Developed a module which describes detailed analysis of a mobile phones that are getting launched in the market. Used WordPress and redesigned based on our needs. </p></Fade>
              <br></br>
              <Fade><p><strong>Friendly Donors</strong></p></Fade>
              <Fade><p><strong>www.friendlydonors.com</strong></p></Fade>
              <Fade><p>Developed a website which helps in finding a blood donor for a required blood group. Designed forms for the user to select the required blood group. Worked on displaying the donor information to the recipients. Created forms for the donors to register and worked in performing the CRUD (Create, Read, Update and Delete) operations with the data from PhpMyAdmin. </p></Fade>
              <hr></hr>
              <Fade><h4>Academic Projects</h4></Fade><br></br>
              <Fade><p><strong>JNTU Student Accounts</strong></p></Fade>
              <Fade><p><strong>Java, HTML, CSS</strong></p></Fade>
              <Fade><p>Scope of this project was to develop and enhance college official website. Focused major part of the work in building the attendance module, where the student attendance for class meetings are made completely online. Also involved in building individual portals for various departments. </p></Fade>
              <br></br>
              <Fade><p><strong>Employee Monitoring System</strong></p></Fade>
              <Fade><p><strong>Java</strong></p></Fade>
              <Fade><p>A login portal is created to monitor the activities of the employee. Software is designed in such a way that once the employee is logged in to the portal the software takes the screenshots at random timings and uploads them in to the database. </p></Fade>
              <br></br>
              <Fade><p><strong>College Management System</strong></p></Fade>
              <Fade><p><strong>ASP.NET</strong></p></Fade>
              <Fade><p>A local database is created to store the college information like faculty details, student details, exam results etc., Login authentication is created for different users and various roles are assigned to them. Finally, restricted access is given to the faculty based on their roles. </p></Fade>
              <br></br>
              <Fade><p><strong>Music Player Android Application</strong></p></Fade>
              <Fade><p><strong>Android, Java</strong></p></Fade>
              <Fade><p>A simple, convenient and user-friendly Music player application for Android mobile operating system. Developed using Android Studio as platform, the Music player allows users to choose a song to play, move forward & backward, and can also be able to repeat the song. </p></Fade>
              <hr></hr>
              <br></br>
              <Fade><h4>Languages/Frameworks</h4></Fade>
              <hr></hr>
              <Fade><ul className="languageresumelist">
                <li>Swift, Objective-C, Java,</li>
                <li>C, C++, HTML, CSS, JavaScript</li>
                <li>Angular 4, A/B Testing</li>
              </ul></Fade>
              <br></br>
              <Fade><h4>Tools/Operations & Design</h4></Fade>
              <hr></hr>
              <Fade><ul className="languageresumelist">
                <li>XCode, JIRA, Confluence, Eclipse</li>
                <li>Source Tree, GitHub</li>
                <li>Abode Photoshop, Illustrator, Adobe Target</li>
                <li>Sketch, Wordpress</li>
              </ul></Fade>
              <br></br>
              <Fade><h4>Contact</h4></Fade>
              <hr></hr>
              <Fade><p>P. (210)-777-1000</p></Fade>
              <Fade><p>E. <a href="mailto:nithinchakravarthyd@gmail.com">nithinchakravarthyd@gmail.com</a></p></Fade>
              <Fade><p>A. 1161 Sonora Ave, APT 203<br></br>  &nbsp;&nbsp;&nbsp;&nbsp;Glendale, CA 91201</p></Fade>
              <hr></hr>
              <a href="https://www.linkedin.com/in/nithinchakravarthyd">LinkedIn</a>
              <br></br>
              </div>
            </div>

          </div>
        <Fade><div className="container resume hidden-xs">
          <div className="row " >
            <div className="col-sm-4 resumeleft">
              <Fade><img src={pp} className="img-responsive pp"></img></Fade>
              <Fade><h4 className="languageresume">Languages/Frameworks</h4></Fade>
              <hr></hr>
              <Fade><ul className="languageresumelist">
                <li>Swift, Objective-C, Java,</li>
                <li>C, C++, HTML, CSS, JavaScript</li>
                <li>Angular 4, A/B Testing</li>
              </ul></Fade>
              <br></br>
              <Fade><h4>Tools/Operations & Design</h4></Fade>
              <hr></hr>
              <Fade><ul className="languageresumelist">
                <li>XCode, JIRA, Confluence, Eclipse</li>
                <li>Source Tree, GitHub</li>
                <li>Abode Photoshop, Illustrator, Adobe Target</li>
                <li>Sketch, Wordpress</li>
              </ul></Fade>
              <br></br>
              <Fade><h4>Contact</h4></Fade>
              <hr></hr>
              <Fade><p>P. (210)-777-1000</p></Fade>
              <Fade><p>E. <a href="mailto:nithinchakravarthyd@gmail.com">nithinchakravarthyd@gmail.com</a></p></Fade>
              <Fade><p>A. 1161 Sonora Ave, APT 203<br></br>  &nbsp;&nbsp;&nbsp;&nbsp;Glendale, CA 91201</p></Fade>
              <hr></hr>
              <a href="https://www.linkedin.com/in/nithinchakravarthyd">LinkedIn</a>
              <br></br>

            </div>
            <div className="col-sm-8 hidden-xs">
              <Fade><h1><strong>Nithin</strong><br></br>Dampetla</h1></Fade>
              <Fade><h3>iOS App Developer</h3><br></br></Fade>
              <hr></hr>
              <Fade><h4>About</h4><br></br></Fade>
              <Fade><p>A versatile iOS App developer with 3 years of experience designing, developing and managing complex iOS Applications and internal frameworks</p></Fade>
              <hr></hr>
              <Fade><h4>Experience in</h4><br></br></Fade>
              <Fade><ul>
                <li>field of design, development and analysis of web applications around 2 years.</li>
                <li>HTML5, CSS3, Angular 4, ReactJS, Redux, JavaScript (ES6), jQuery, NodeJS, SASS, Bootstrap, Firebase</li>
                <li>Karma, Chrome Developer Tools, React Developer Tools</li>
                <li>Object Oriented Design</li>
                <li>Passionate in both design and development</li>
                <li>Adobe Photoshop, Illustrator, Lightroom, Sketch</li>
              </ul></Fade>
              <hr></hr>
              <Fade><h4>Professional Experience</h4></Fade><br></br>
              <Fade><p><strong>Walt Disney Parks and Resorts, CA</strong></p></Fade>
              <Fade><p><strong>iOS App Developer</strong></p></Fade>
              <Fade><p>As part of Disney’s Digital Testing - Optimization team, I worked on implementing an innovative technology to improve the guests experience called Content testing, which is a marketing strategy used to determine the most effective content in terms of sales. Two versions of a single page in the application are compared against each other to determine which one performs better. This is typically done by testing a random user’s response to variant A against variant B, and determining which of the two variants is more effective and implement that variant permanently. </p></Fade>
              <Fade><ul>
                <li>Participate in SCRUM meetings along with developers, testers, product owners to deliver the right value of project and discuss the progress of the project in sprints</li>
                <li>Took part of developing a feature used by millions of people in the US. </li>
                <li>Collecting requirements from Business Analysts and analyzing the complexity of the new implementation and suggest better ways to perform a task.</li>
                <li>Coordinating with the design team to define the user interface (UI/UX) requirements for the application.</li>
                <li>Create Implementation Box(mBox) in Adobe Target with multiple experiences for every A/B test.</li>
                <li>Created a Networking Manager to make network calls to Adobe Target with mBox and store the data received in the models.</li>
                <li>Modify the UI based on the data in the models using MVC Architecture.</li>
                <li>Worked with cocoapods and carthage dependency managers. </li>
                <li>Used Multithreading and GCD concepts for faster response of the application.</li>
                <li>Developed the code in object-oriented manner for optimal code re­usability using Swift 4.0.</li> 
                <li>Discuss an action plan to make sure that it is easy to remove the code written for developing an A/B test as we run the code temporarily, typically a month to track the Analytics.</li> 
                <li>Develop Unit Tests using test cases to make sure the A/B test is not breaking any of the existing flow.</li> 
                <li>Took care of Code Review, Code Fixes and bug Fixes.</li>
                <li>Update task status, Bug reports and furnishing Backlogs in JIRA using timely Backlog review session with team.</li> 
                <li>Used Git for version control and pushing code changes periodically.</li>
              </ul></Fade>
              <br></br>
              <Fade><p><strong>Freelance iOS App Developer</strong></p></Fade>
              <Fade><p><strong><a href="https://itunes.apple.com/us/app/gizmos-today/id1369631289?mt=8">https://itunes.apple.com/us/app/gizmos-today/id1369631289?mt=8</a></strong></p></Fade>
              <Fade><p>Worked on developing some apps, one of which is Gizmos Today, where one can find all the happenings in the tech world related to smartphones, laptops, IoT products, wearables and more. Users can discover what's new and trending in the tech space on the move. </p></Fade>
              <Fade><ul>
                <li>Develop native iOS products compatible with iPhone and iPad using Swift.</li>
                <li>Implemented Third party library Alamofire to make network calls using cocoapods. </li>
                <li>Used CoreData to implement data persistence on the devices without making network calls when necessary.</li> 
                <li>Integrated a web-based content made with HTML5 on a Native app using UIWebViews in one of the screens.</li>
                <li>Implemented gradient view for the Menu screen including the animations to display the menu items.</li> 
                <li>Created and customized table views, pop-over views, collection views and navigation bars.</li>
                <li>Implemented singleton design pattern while developing the application.</li>
                <li>Worked with Constraints using Interface Builder with Autolayout.</li>
                <li>Implemented GCD (Grand Central Dispatch) and closures to have a responsive UI.</li> 
                <li>Implemented the search functionality to search for an article in the app.</li>  
                <li>Worked on implementing the Apple Push Notification service.</li>
                <li>Worked with RESTful web services and parse the JSON to dynamically display the data.</li> 
                <li>Performed Unit Testing by writing various test cases.</li>
                <li>Worked with GIT to checkout and update the code changes.</li>
                <li>Published the app on App Store and Distributed build for Adhoc and App store configurations for testing.</li>
              </ul></Fade>
              <br></br>
              <Fade><p><strong>iOS App Developer</strong></p><p className = "years">(2012)</p></Fade>
              <Fade><p><strong>Tyche IT Consulting, India</strong></p></Fade>
              <Fade><p>Tyche IT Consulting specializes in investments in the software, data, & technology industries, working with companies who have a long-term perspective. I developed iOS Applications for multiple clients, some of which are based on ecommerce, health care and gaming. Tchye IT Consulting is available for hire to work on projects for iOS.  </p></Fade>
              <Fade><ul>
                <li>Involved in business analysis, design, coding and testing phases on application.</li>
                <li>Deliver projects with High Quality and High Performance. </li>
                <li>Made decisions on Layout Design for better User Experience and developed UI Accordingly.</li>
                <li>Communicated with business team regularly, provided status reports, discussed the needs and provided possible solutions whenever necessary.</li>
                <li>Performed all tasks from UI design and implementation to writing code for various features.</li>
                <li>Developed interactive views with functionalities like UICollectionView, UIScrollView and Navigation Bar Controller.</li>
                <li>Worked extensively with Objective C, Swift and Auto layout.</li>
                <li>Integrated various Restful Web services call to application.</li>
                <li>Created models in MVC and development of delegates for updating model information and created hybrid apps.</li>
                <li>Created various views, table views, customized views and popovers.</li>
                <li>Pre-fetching data for smooth screen transitioning.</li>
                <li>Used Agile Development methodology of software development.</li>
                <li>Participated in bi­weekly Sprint planning and daily scrum meetings.</li>
                <li>Used GitHub for Version control.</li>
              </ul></Fade>
              <br></br>
              <Fade><p><strong>Shoppy Retail & Technology Services Pvt. Ltd, India</strong></p></Fade>
              <Fade><p><strong>Web Developer (Intern)</strong></p></Fade>
              <Fade><p>Worked as a Web developer for an e-commerce site named oyeshoppy and experienced Magento environment. The purpose of this site is to provide users with variety of items that they can choose to buy. It also provides a portal for sellers to post their products to users, providing the sellers and buyers a medium to sell and buy the goods respectively.</p></Fade>
              <Fade><ul>
                <li>Worked intensively with the business analyst to collect the requirements.</li>
                <li>Developed and designed new Web Interfaces, layouts and Extensions.</li>
                <li>Worked mostly in the front end with various pages to display the products.</li>
                <li>Developed a calculator for seller in order to track their profits.</li>
                <li>Worked in designing a module in which an affiliate member can get an affiliate link which can be used in other sites.</li>
                <li>Worked in creating a module in which seller can submit their request on particular brand and category to admin and then admin verifies and approves the request.</li>
                <li>Worked with UI team to design the icons, Custom Vies, View Transitions, animations for the pages.</li>
                <li>Used GitHub as a repository.</li>
              </ul></Fade>
              <hr></hr>
              <Fade><h4>Research Projects</h4></Fade><br></br>
              <Fade><p><strong>Gizmos Today</strong></p></Fade>
              <Fade><p><strong>www.gizmostoday.com</strong></p></Fade>
              <Fade><p>Developed and designed an interactive website which provides the latest news related to technology. Worked as a Technical Content Writer and wrote several articles for Gizmos Today. Developed a module which describes detailed analysis of a mobile phones that are getting launched in the market. Used WordPress and redesigned based on our needs. </p></Fade>
              <br></br>
              <Fade><p><strong>Friendly Donors</strong></p></Fade>
              <Fade><p><strong>www.friendlydonors.com</strong></p></Fade>
              <Fade><p>Developed a website which helps in finding a blood donor for a required blood group. Designed forms for the user to select the required blood group. Worked on displaying the donor information to the recipients. Created forms for the donors to register and worked in performing the CRUD (Create, Read, Update and Delete) operations with the data from PhpMyAdmin. </p></Fade>
              <hr></hr>
              <Fade><h4>Academic Projects</h4></Fade><br></br>
              <Fade><p><strong>JNTU Student Accounts</strong></p></Fade>
              <Fade><p><strong>Java, HTML, CSS</strong></p></Fade>
              <Fade><p>Scope of this project was to develop and enhance college official website. Focused major part of the work in building the attendance module, where the student attendance for class meetings are made completely online. Also involved in building individual portals for various departments. </p></Fade>
              <br></br>
              <Fade><p><strong>Employee Monitoring System</strong></p></Fade>
              <Fade><p><strong>Java</strong></p></Fade>
              <Fade><p>A login portal is created to monitor the activities of the employee. Software is designed in such a way that once the employee is logged in to the portal the software takes the screenshots at random timings and uploads them in to the database. </p></Fade>
              <br></br>
              <Fade><p><strong>College Management System</strong></p></Fade>
              <Fade><p><strong>ASP.NET</strong></p></Fade>
              <Fade><p>A local database is created to store the college information like faculty details, student details, exam results etc., Login authentication is created for different users and various roles are assigned to them. Finally, restricted access is given to the faculty based on their roles. </p></Fade>
              <br></br>
              <Fade><p><strong>Music Player Android Application</strong></p></Fade>
              <Fade><p><strong>Android, Java</strong></p></Fade>
              <Fade><p>A simple, convenient and user-friendly Music player application for Android mobile operating system. Developed using Android Studio as platform, the Music player allows users to choose a song to play, move forward & backward, and can also be able to repeat the song. </p></Fade>
              <hr></hr>
              <Fade><h4>Education</h4></Fade><br></br>
              <Fade><p><strong>Masters in Computer Science</strong></p></Fade>
              <Fade><p>Texas A&M University-Kingsville, Texas.</p></Fade>
              <br></br>
              <Fade><p><strong>Bachelors in Information Technology</strong></p></Fade>
              <Fade><p>Jawaharlal Nehru Technological University, Anantapur, India</p></Fade>
            </div>
          </div>
        </div></Fade>
      </div>
    );
  }
}

export default Resume;

