import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Validation } from "./Validation";
import swal from "sweetalert"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios"

export const Contact = () => {

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        cel: "",
        mensaje: ""})
    
    const [err, setErr] = useState({
        nombre: "",
        apellido: "",
        email: "",
        cel: "",
        mensaje: ""
        })

    const formInitial = {
     nombre: "",
    apellido: "",
    email: "",
    cel: "",
    mensaje: ""
    }

    const [buttonText, setButtonText] = useState("Enviar")

    const onFormUpdate = (event) => {
        const { value, name } = event.target;
        setForm({...form, [name]:value})
        setErr(Validation({...form, [name]:value}))
    }

    const validateError = Object.keys(err)
    const validateForm = Object.values(form)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(validateError.length > 0){
            swal({
                title: "Ups",
                text: "Complete los campos correctamente",
                icon: "error",
                timer: 3000,
                button: false
            })
            return
        }
        if (!validateForm.every((value) => value !== "")) {
            event.preventDefault();
            swal({
              title: "Ups",
              text: "Complete todos los campos",
              icon: "error",
              timer: 3000,
              buttons: false
            });
            return;
          }
          
        event.preventDefault();
        setButtonText("Enviando...")
        const response = await axios.post("https://server-portafolio.vercel.app/contact", form)
        setButtonText("Enviar")
        if(response.data.code === 200){
            swal({
                title: "Exito",
                text: response.data.message,
                icon: "success",
                timer: 3000,
                button: false
            })
        } else {
            swal({
                title:"Ups a ocurrido un error",
                text: response.data.message,
                icon: "error",
                timer: 3000,
                button: false
            })
        }
        setForm(formInitial)
    }
    
    return (
        <section className="contact" id="contacto">
            <Container>
                <Row className="align-items-center">

            <TrackVisibility>
            {({isVisible}) => 
            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
            <h1>Contactame</h1>
            <p>Si tienes alguna pregunta, no dudes en contactarme</p>
            </div>}
            </TrackVisibility>   
                <form className="form-inner" onSubmit={handleSubmit}>
                    <Row>
                        <Col size={12} sm={6} className="px-1">
                            <input type="text" name="nombre" value={form.nombre} placeholder="Nombre" onChange={onFormUpdate} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="text" name="apellido" value={form.apellido} placeholder="Apellido" onChange={onFormUpdate}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="email" name="email" value={form.email} placeholder="Correo electronico" onChange={onFormUpdate}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="tel" name="cel" value={form.cel} placeholder="Numero de telefono" onChange={onFormUpdate}/>
                            {err.cel ? <span className="error">{err.cel}</span> : ""}
                        </Col>
                        <Col size={12} className="px-1">
                            <div>
                            <textarea typeof="text" name="mensaje" value={form.mensaje} placeholder="Escribe tu mensaje" onChange={onFormUpdate}/>
                            {err.mensaje ? <span className="error">{err.mensaje}</span>: ""}
                            </div>
                            <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                    </Row>
                </form>
                </Row>
            </Container>
        </section>
    )
}