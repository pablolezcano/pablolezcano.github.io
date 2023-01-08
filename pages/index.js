import Layout from "../components/Layout";
import {experiences, projects, skills,skillBackEnd, skillFrontEnd, otherSkill} from "../profile";
import Link from "next/link";
import Rings from "../components/Rings";

const Index = () => (

    
    <Layout>      

       {/** header */}
      

{/**}
        <header className="row">
            <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4"> 
                        <img src="/profile.jpeg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h3>Desarrollador JS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere optio itaque non autem consequuntur modi, aliquid eum? Neque sapiente impedit iste ratione molestias, nostrum omnis similique autem, inventore, sint dolorem!</p>
                            <a href="/contacto">Contactame</a>
                        </div>
                    </div>
            </div>
        </header>

        {/** Segunda seccion */}

        {/** Sobre mi */}
        <div id="sobre-mi" className="row">
            <div className="col-md-12">
            <h1 className="text-center text-dark">Sobre mi</h1>
                <div className="card-custom">
                    <div className="row">
                        <div className="col-md-12 p-3">
                           <p className="p-4"> Hola! Me llamo Pablo y soy de Pergamino, Buenos Aires, Argentina. Soy desarrollador JS en busqueda de mi primer experiencia en el desarrollo. He aprendido de forma autodidacta diferentes tecnologías. Actualmente estoy trabajando como Analista de Mesa de Ayuda. 
                            <br>
                            </br>
                                 Me considero una persona responsable y atenta a los detalles, con muchas ganas de seguir aprendiendo nuevas habilidades y tecnologías web para mi desarrollo profesional. También tengo un fuerte compromiso con los proyectos que me asignan, y doy lo mejor de mí para completar las tareas con el mejor resultado posible.
                           </p> 
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/** Habilidades */}

        <div className="row py-2">
            <div className="col-md-12">
            <h1 id="habilidades" className="text-center text-dark">Habilidades</h1>
                <div className="card-custom p-4">
                    <h3>Lenguajes de programación</h3>
                    <div className="container d-flex flex-wrap align-items-center p-3">
                        {
                            skills.map(({skill ,image}, i) => (
                                        <div class="m-2 card-small-c" key={i}>
                                            <img src={`${image}`} alt={`${skill}`} width="50%" height="auto"/>
                                        </div>
                            ))
                        }
                    </div>

                    <h3>Frontend</h3>
                    <div className="container d-flex flex-wrap align-items-center p-3">
                        {
                            skillFrontEnd.map(({skill ,image}, i) => (
                                        <div class="m-2 card-small-c" key={i}>
                                            <img src={`${image}`} alt={`${skill}`} width="50%" height="auto"/>
                                            
                                        </div>
                            ))
                        }
                    </div>

                    <h3>Backend</h3>
                    <div className="container d-flex flex-wrap align-items-center p-3">
                        {
                            skillBackEnd.map(({skill ,image}, i) => (
                                        <div class="m-2 card-small-c" key={i}>
                                            <img src={`${image}`} alt={`${skill}`} width="50%" height="auto"/>
                                        </div>
                            ))
                        }
                    </div>

                    <h3>Otras herramientas</h3>
                    <div className="container d-flex flex-wrap align-items-center p-3">
                        {
                            otherSkill.map(({skill ,image}, i) => (
                                        <div class="m-2 card-small-c" key={i}>
                                            <img src={`${image}`} alt={`${skill}`} width="50%" height="auto"/>
                                            
                                        </div>
                            ))
                        }
                    </div>  

                </div>
            </div>
        </div>

        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
            <h1 id="proyectos" className="text-center text-dark">Proyectos</h1>
                <div className="card-custom p-4">
                    <div className="row">
                    {
                            projects.map(({name, description, image,tech,github,view }, i) =>(
                        <div className="p-4 mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={`/${image}`} class="card-img-top h-100" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body ">
                                        <h5 className="card-title">{name}</h5> 
                                        <p className="card-text">{description}</p>
                                        
                                        <h5>Tecnologías utilizadas</h5>
                                        <div className="p-3" >
                                        <span className="badge bg-dark">{tech}</span>

                                        </div>
                                            <div className="text-center text-md-start">
                                               <div className="p-3">
                                                    <span className="p-3">
                                                        <a href={github} target="_blank" className="btn btn-outline-dark">Github</a>
                                                    </span>
                                                    <span className="p-3">
                                                        <a href={view} target="_blank" className="btn btn-outline-dark">Visitar</a>
                                                    </span>

                                              
                                               </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                                ))
                        }

                    </div>
                </div>
            </div>



        </div>

        {/** Contacto */}

        <div className="row py-2">
            <h1 id="contacto" className="text-center text-dark">Contacto</h1>
            <div className="card-custom p-4">
                <div className="col-11 col-lg-9 p-3 p-md-4 p-xl-5 m-auto border-radius-1em">
                    <div className="row g-4">
                    <div className="col-12 col-md-6 ">
                            <a href="https://www.linkedin.com/in/pablolezcano" target="_blank" class="p-4 d-flex justify-content-start align-items-center">
                                    <img src="linkedin.svg" alt="linkedin" class="ms-sm-3 ms-md-0 ms-xl-3 me-3 me-sm-5 me-md-3 me-xl-5"/>
                                    <p class="m-0 fs-0 fs-md-5">/pablolezcano</p>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <a href="mailto:pabloromanlezcano@gmail.com" class="p-4  d-flex justify-content-start align-items-center">
                                    <img src="mail4.svg" alt="email" class="ms-sm-3 ms-md-0 ms-xl-3 me-3 me-sm-5 me-md-3 me-xl-5"/>
                                    <p class="m-0 fs-0 fs-md-5 text-wrap">pabloromanlezcano@gmail.com</p>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 ">
                        <a href="https://drive.google.com/file/d/1ulkkA6PLCiga7e2F-BKmGAKptHy0NV3B/view" class="p-4  d-flex justify-content-start align-items-center">
                                    <img src="file-text2.png" alt="email" class="ms-sm-3 ms-md-0 ms-xl-3 me-3 me-sm-5 me-md-3 me-xl-5"/>
                                    <p class="m-0 fs-0 fs-md-5 text-wrap">Curriculum Vitae</p>
                            </a>
                        </div>
                        <div className="col-12 col-md-6">
                        <a href="https://github.com/pablolezcano/" class="p-4  d-flex justify-content-start align-items-center">
                                    <img src="github.svg" alt="email" class="ms-sm-3 ms-md-0 ms-xl-3 me-3 me-sm-5 me-md-3 me-xl-5"/>
                                    <p class="m-0 fs-0 fs-md-5 text-wrap">/pablolezcano</p>
                            </a>
                        </div>
                    </div>
                </div>
                        
            </div>
        </div>
</Layout>
)

export default Index;
