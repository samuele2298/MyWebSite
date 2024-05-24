import Header from '../components/Header';
import Technologies from '../components/Technologies';
import Profile from '../components/Profile';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Passions from '../components/Passions';
import Head from 'next/head'
import Experiences from '../components/Experiences';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0, 
                    maximum-scale=1.0,user-scalable=no" />
            </Head>
            <Header />
            <main>
                <Profile />
                <Technologies />
                <Projects />
                <Experiences />
                <Education />
                <Passions />
                <Contact />
            </main>

        </ >
    );
};


export default Home;
