import React, { useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import newBanner from "./assets/img/programando.svg"
import Cv from "./assets/Curriculum/CV-H.cano.pdf"
import { saveAs } from 'file-saver';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner =() => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Full Stack", "Front end", "Back end"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2050;
   
    useEffect(()=> {
        let ticker = setInterval(()=>{
            tick()
        }, delta)
        return () => {
            clearInterval(ticker)
        }
    },[text])

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let upDatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(upDatedText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && upDatedText === fullText ){
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && upDatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    const handleDownloadCv = () => {
        const fileName = "cv-horaciocano.pdf"
        saveAs(Cv, fileName)
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <span className="tagline">Bimvenido a mi portafolio</span>
                        <h1 className={windowWidth > 700 ? "" : "custom-mobile"}>{`Hola soy desarrollador `}<br/><span className="wrap">{text}</span></h1>
                        <p>Soy una persona apasionada y dedicada a la programación, con una actitud activa hacia mi trabajo. Estoy constantemente actualizando y expandiendo mis habilidades para estar al tanto de las últimas tendencias en el mundo de la tecnología. En pocas palabras, mi objetivo es crecer profesionalmente.</p>
                        </div>}
                        </TrackVisibility>
                        <button onClick={handleDownloadCv}>Descargar cv<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={newBanner} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}