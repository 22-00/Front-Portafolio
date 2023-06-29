import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl}) => {

    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
               <img src={imgUrl} /> 
               <div className="proj-txtx">
                <h4>{title}</h4>
                {
                    description === "Visita nuestro proyecto" ?
                    <div className="container-a">
                    <a href="https://pf-front-eegvakue1-22-00.vercel.app/" target="_blank"><span>{description}</span></a></div> :
                    <span>{description}</span>
                }
               </div>
            </div>
            
        </Col>
    )
}