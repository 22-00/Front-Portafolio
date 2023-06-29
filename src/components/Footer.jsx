import { Col, Container, Row } from "react-bootstrap"
import newLogo from './assets/img/newLogo.svg'
import navIcon1 from "./assets/img/nav-icon1.svg";
import navIcon2 from "./assets/img/nav-icon2.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={newLogo} alt="H.cano"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/horacio-cano-b19545243" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
                        <a href="https://www.facebook.com/horacio.cano.90" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/horacio.cano" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>&copy; CopyRight 2023. Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}