import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bootstrap from "./assets/img/bootstrap.svg";
import css from "./assets/img/css3.svg";
import html from "./assets/img/html.svg";
import express from "./assets/img/express.svg";
import nodeJs from "./assets/img/nodej.svg";
import Javascript from "./assets/img/javascript.svg";
import Redux from "./assets/img/redux.svg";
import react from "./assets/img/react.svg";
import Git from "./assets/img/git.svg";
import Postgre from "./assets/img/postgresql.svg";
import colorSharp from "./assets/img/color-sharp.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                      <TrackVisibility>
                      {
                        ({isVisible})=> 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                          <h2>
                              Skills
                          </h2>
                          <p>Poseo sólidas habilidades en diversos lenguajes de programación, lo que me permite abordar una amplia gama de proyectos y desafíos tecnológicos. Cuento con conocimientos en el desarrollo de aplicaciones web y móviles, así como en el manejo de bases de datos y la implementación de soluciones eficientes.</p>
                          </div>
                        }
                        </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                          <div className="item">
                          <img src={bootstrap} alt="bootstrap" />
                            <h5>Bootstrap</h5>
                          </div>
                          <div className="item">
                            <img src={css} alt="Css"/>
                            <h5>Css</h5>
                          </div>
                          <div className="item">
                            <img src={html} alt="html"/>
                            <h5>Html5</h5>
                          </div>
                          <div className="item">
                            <img src={express} alt="express"/>
                            <h5>Express</h5>
                          </div>
                          <div className="item">
                          <img src={nodeJs} alt="nodeJs" />
                            <h5>NodeJs</h5>
                          </div>
                          <div className="item">
                          <img src={Javascript} alt="Javascript" />
                            <h5>Javascript</h5>
                          </div>
                          <div className="item">
                          <img src={Redux} alt="Redux" />
                            <h5>Redux</h5>
                          </div>
                          <div className="item">
                          <img src={react} alt="React" />
                            <h5>React</h5>
                          </div>
                          <div className="item">
                          <img src={Postgre} alt="PostgreSQL" />
                            <h5>PostgreSQL</h5>
                          </div>
                          <div className="item">
                          <img src={Git} alt="Git" />
                            <h5>Git</h5>
                          </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}