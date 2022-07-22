import Layout from "../components/Layout";


const Github = ({user}) => {


   return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url}/>
                        <p>{user.bio}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(){

    const rest = await fetch('https://api.github.com/users/pablolezcano')
    const data = await rest.json();

    return {
        props: {
            user: data
        }
    }
}

export default Github;