import Head from "next/head";
import Image from "next/image";
import Landing from "../components/Landing/Landing";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="SkyLink Creative" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Landing></Landing>
            </main>
        </div>
    );
}
