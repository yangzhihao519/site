import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/App.css';
import '../css/Home.css'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="introduction">
          <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                  <h1 id="hello">Hello!</h1>
                  <h1><span>I'm</span>&nbsp; Zhihao Yang,</h1>
                  <h1><span>a</span>&nbsp; UX Engineer &nbsp;<span>based in London.</span></h1>
                  <div className="call-to-actinon">
                    <Row>
                      <Col xs={4} sm={2} md={2} lg={2}>
                        <Link to="/resume" style={{ color: "white" }}>
                          <div id="view-cv">
                            <h5>About me</h5>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={4} sm={2} md={2} lg={2}>
                        <Link to="/portfolio" style={{ color: "white" }}>
                          <div id="view-portfolio">
                            <h5>See work</h5>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </div>
              </Col>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
          </Row>
        </div>

        <div id="about-me">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
              <Col xs={12} sm={10} md={10} lg={8}>
                  <h3>Zhihao is fascinated about using digital solution to change the way we are living using the skills he has: high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life.</h3>
                  <Link to="/portfolio" style={{ color: "white" }}>
                    <div id="download-cv">
                      <h5><a href="https://drive.google.com/file/d/0B209VNQwXS5QNFhvRmtDUER1Uzg/view?usp=sharing" target="_blank">Download CV <span className="glyphicon glyphicon-download-alt"></span></a></h5>
                    </div>
                  </Link>
              </Col>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
            </Row>
        </div>
        
        <div id="work">
          <Row style={{marginLeft:0, marginRight:0}}>
              <a href="#/portfolio/1" target="_blank">
                <div className="portfolio-item" style={{marginBottom: 10}}>
                  <div className="portfolio-item-image">
                    <img src={require('../images/portfolio/h2020_cover.png')} role="presentation"/>
                    <div className="portfolio-item-content">
                      <h4>Web-based Visualisation Tool of Horizon 2020</h4>
                      <p>Work mainly focuses on UI & UX design and front-end development.</p>
                      <div className="view-more-button">
                        <p style={{ marginBottom: 0 + "px" }}>VIEW MORE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
          </Row>
        </div>

        <div id="contact">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                  <h1>Let’s get in touch!</h1>
                  <h1>Let me know if you have any interesting ideas to work on.</h1>
                  <h1><a href="mailto:yang_zhihao@live.com">Email</a>, <a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a>, <a href="https://www.github.com/yangzhihao519" target="_blank">Github</a>, <a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a> & <a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h1>
              </Col>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default Home;