import Head from "next/head";
import SeoHero from "../../../components/SeoHero/SeoHero";

const index = () => {
    return (
        <div>
            <Head>
                <title>SkyLink Creative | Web development Agency</title>
                <meta name="description" content="SkyLink Creative" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SeoHero></SeoHero>
            </main>
        </div>
    );
};

export default index;
