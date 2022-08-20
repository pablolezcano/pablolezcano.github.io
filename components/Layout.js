import Navbar from './Navbar'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import Rings from './Rings';


const Layout = ({children}) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            nProgress.start();
        }
        
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', () => nProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange) 
        }
    }, [])

    return (
        <>

   {/*    <Navbar /> */}
    <Rings/>
    <main className='container py-4'>

        {children}

    </main>

    <footer className='text-center'>
        <div className="container p-4">
            <h5>Hecho por @pablolezcano</h5>
            <p>2022</p>
        </div>
    </footer>

    </>
    )
}

export default Layout;