import Layout from "../components/Layout";
import {experiences, projects} from "../profile";
import Link from "next/link";


const Index = () => (
    <Layout>
       {/** header */}
        
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-4"> 
                        <img src="/profile.jpeg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Pablo Lezcano</h1>
                            <h3>Desarrollador</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere optio itaque non autem consequuntur modi, aliquid eum? Neque sapiente impedit iste ratione molestias, nostrum omnis similique autem, inventore, sint dolorem!</p>
                            <a href="/contacto">Contactame</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Segunda seccion */}

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-ligth">
                    <div className="card-body">
                        <h1>Habilidades</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                    <div className="card bg-ligth">
                        <div className="card-body">
                            <h1>Experiencia</h1>

                            <ul>
                                {
                                    experiences.map(({title, description, from, to}, index) => (
                                        <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>{from} - {to}</h5>
                                    <p>{description}</p>
                                            </li>
                                    ))
                                }
                            </ul>


                        </div>
                    </div>
                </div>
        </div>

        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portafolio</h1>
                        </div>


                       {
                        projects.map(({name, description, image}, i) =>(
                            <div className="col-md-4 py-2" key={i}>
                            <div className="card h-100">
                                <div className="overflow">
                                    <img src={`/${image}`} alt="" className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <a href="#!">Ver más</a>
                                </div>
                            </div>
                        </div>
                        ))
                       }

                    </div>
                    <div className="col-md-12">
                        <div className="text-center">
                        <Link href="/">
                            <a className="btn btn-outline-light">Más proyectos</a>
                        </Link>
                </div>
            </div>
                </div>
                
            </div>

            

        </div>


</Layout>
)

export default Index;