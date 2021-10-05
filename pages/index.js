import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

export default function Home() {
    return (
        <div>
            <Head>
                <title>SkyLink Creative | Web development Agency</title>
                <meta name="description" content="SkyLink Creative" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Landing></Landing>
                <Services></Services>
                <About></About>
                <Team></Team>
                <Contact></Contact>
            </main>
        </div>
    );
}
