import React from "react";
import DocumentTitle from "react-document-title";
import "./styles.css";

export default function App() {
  return (
    <DocumentTitle title="Leandro Fernandez">
      <div className="App">
        <div id="header-container">
          <div id="main-data">
            <h1>Leandro Fernandez</h1>
            <h3>Personal Data:</h3>
            <ul>
              <li>Age: 25</li>
              <li>Nationality: Argentine</li>
              <li>Adress: Monte Castro, CABA</li>
              <li>Email: leandroofernandezz@gmail.com</li>
              <li>Phone number: +54 1168521053</li>
            </ul>
          </div>
          <img id="profile-pic" src="./_MG_5204_face.jpg" alt="profile pic" />
        </div>
        <h3>Summary</h3>
        <p>
          Looking for new projects where I can achieve an impact, apply my
          experience in the development of web apps and find good working
          environments where I can help others and get good feedback.
        </p>
        <h3>Education</h3>
        <ul>
          <li>
            Currently focused on becoming a better self taught javascript
            developer by applying to web courses dictated by top frontend
            developers - FrontendMasters, testingjs.com
          </li>
          <li>Systems Engineering at UTN, 2013 - stopped in 2018</li>
          <li>
            Computer Technician at E.T. 35 D.E. 18 Ing. Eduardo Latzina, 2008 -
            2013
          </li>
          <li>English level: Firsts Certificate with a B qualification</li>
        </ul>
        <h3>Experience</h3>
        <h4>
          <a href="https://www.bons.io/">Bons</a> October 2018 - Present:
        </h4>
        <ul>
          <li>
            Frontend development of{" "}
            <a href="https://www.produck.io/">Produck</a> progressive web app
          </li>
          <li>
            Worked on many bons clients projects based on node apps with
            Angularjs and react frontends
          </li>
        </ul>
        <h4>
          <a href="https://despegar.com">Despegar.com</a> August 2015 - October
          2018:
        </h4>
        <ul>
          <li>
            Received training during "Alto Vuelo" course given by leaders of
            backend, frontend and mobile teams
          </li>
          <li>Development of REST APIs written in JAVA, SCALA and node.js</li>
          <li>Development of user interfaces based on angularjs and React</li>
        </ul>
        <h3>Key technologies I have worked with</h3>
        <ul>
          <li>React, Redux, Apollo, Webpack, PWAs, POSTCSS with SASS, HTML5</li>
          <li>Nodejs with express, JAVA with Spring, Scala with Play </li>
        </ul>
      </div>
    </DocumentTitle>
  );
}
