import { Container, Row, Tab, Col, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { projects } from "./arrProjects"
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {
                    ({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projectos</h2>
                    <p>Como desarrollador junior, he tenido la oportunidad de trabajar en varios proyectos que han sido fundamentales para mi crecimiento profesional en el campo del desarrollo web. A través de estos proyectos, he podido aplicar los conocimientos que he adquirido en los lenguajes de programación.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Ohana</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">VideoGames</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Country
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.ohana.length ? 
                                    projects.ohana.map((project, index)=>{
                                    return (
                                        <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl} />
                                    )
                                   }) : <h2>Hubo un error</h2>
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    projects.videoGame.length ? 
                                    projects.videoGame.map((project, index)=>{
                                    return (
                                        <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl} />
                                    )
                                   }) : <h2>Hubo un error</h2>
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    projects.country.length ? 
                                    projects.country.map((project, index)=>{
                                    return (
                                        <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl} />
                                    )
                                   }) : <h2>Hubo un error</h2>
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}