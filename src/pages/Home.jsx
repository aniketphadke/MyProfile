import React from "react";
import { Container, Row, Col } from "reactstrap";
import userImage from "../images/user.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import github from "../images/github-line.png";
import linkedIn from "../images/linkedin-fill.png";
import instagram from "../images/instagram-line.png";
import facebook from "../images/facebook-line.png";
import nullClass from "../images/nullClass.png"

const Home = () => {
  return (
    <>
      <section className="home_section">
        <Container>
          <Row>
            <Col lg={6} className="info">
              <h4>
                Hello,
                <br />
                <span className="name"> Aniket Phadke</span>
              </h4>
              <p>
                I'm
                <h4 className="typing_text">
                  {" "}
                  <span></span>
                </h4>
              </p>
              <p>
                Results-driven Full Stack Developer with expertise in both
                front-end and back-end technologies, including
                HTML,CSS,JavaScript, and Node.js. Proven ability to design and
                implement responsive web applications. Strong problem-solving
                skills and experience with database management using SQL and
                NoSQL solutions. Committed to continuous learning and
                collaboration in fast-paced team environments.
              </p>
              <div className="image">
                <Link to="https://www.github.com/aniketphadke">
                  <img src={github} alt="not" />
                </Link>
                <Link to="https://www.linkedin.com/in/aniket-phadke">
                  <img src={linkedIn} alt="not" />
                </Link>
                <Link to="https://www.instagram.com/aniketphadke?igsh=bjc2cm1lODhvcHdk">
                  <img src={instagram} alt="not" />
                </Link>
                <Link to="https://www.facebook.com/share/upoYKK4LZUVTJFnD/">
                  <img src={facebook} alt="not" />
                </Link>
              </div>
            </Col>
            <Col lg={6} className="image_col">
              <img src={userImage} alt="not" />
            </Col>
          </Row>
          <Row>
            <hr style={{ color: "white" }} />
            <Col lg="12">
              <h1>Education</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" className="graduation m-5">
              <h2>Graduation</h2>
              <h4>Bachelor of Science in Computer Science</h4>
              <p>2021-2024</p>
              <p>Savitribai Phule Pune University</p>
            </Col>
            <Col lg="3" className="hsc mt-5">
              <h2>Higher Secondary Education</h2>
              <h4>HSC</h4>
              <p>2019-2021</p>
              <p>New English School</p>
            </Col>
            <Col className="hsc mt-5">
              <h2>Secondary Education</h2>
              <h4>SSC</h4>
              <p>2018</p>
              <p>Shree Datt Madhyamik vidyalaya</p>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <Row>
            <Col lg="12">
              <h1>Experience</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="5" className="m-5">
            <h4>Frontend Developer</h4>
              <h3>Null Class Private Limited</h3>
              <h6>2023-2024</h6>
              <p className="m-2">
                Working with the web development team.
              </p>
              <p className="m-2">
              Manage website design,content, layout of web page and handling SQL data .
              </p>
            </Col>
            <Col className="icon">
              <img src={nullClass} alt="not" />
            </Col>
          </Row>
          <br />
          <hr />
          <Row>
            <Col>
              <h1>Projects</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
