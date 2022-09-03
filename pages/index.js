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
                           <p className="p-4"> Hola! Me llamo Pablo y soy de Pergamino, Buenos Aires, Argentina. Soy desarrollador JS en busqueda de mi primer experiencia en el desarrollo. He aprendido de forma autodidacta manteniendo la constancia y la motivacion. Actualmente estoy trabajando como Analista de Mesa de Ayuda. </p> 
                            <p className="p-4"> Me considero una personaresponsable y atenta a los detalles, con muchas ganas de seguir aprendiendo nuevas habilidades y tecnologías web para mi desarrollo profesional. También tengo un fuerte compromiso con los proyectos que me asignan, y doy lo mejor de mí para completar las tareas con el mejor resultado posible. </p>
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
                                        <span className="badge bg-secondary">{tech}</span>

                                        </div>
                                            <div className="text-center text-md-start">
                                               <div className="p-3">
                                                    <span className="p-3">
                                                        <a href={github} target="_blank" className="btn btn-outline-secondary">Github</a>
                                                    </span>
                                                    <span className="p-3">
                                                        <a href={view} target="_blank" className="btn btn-outline-secondary">Visitar</a>
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

        <div className="row">
            <div className="col-md-12">
            <h1 className="text-center text-dark">Contacto</h1>
                <div className="card-custom">
                    <div className="row">
                        <div className="col-md-12 p-5" >
                        <div className="row">
                            <div className="col">
                                <div className="card-small-b">
                                    @pabloromanlezcano
                                </div>
                            </div>
                            <div className="col">
                            <div className="card-small-b">/in/pablolezcano</div>
                            </div>
                                <div className="w-100"></div>
                            <div className="col">
                                <div className="card-small-b">
                                Curriculum Vitae
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-small-b">
                                Github
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</Layout>
)

export default Index;