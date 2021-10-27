import Head from "next/head";
import Wordpress from "../../../components/WordPress/Wordpress";
const index = () => {
    return (
        <div>
            <Head>
                <title>SkyLink Creative | Web development Agency</title>
                <meta name="description" content="SkyLink Creative" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Wordpress/>
            </main>
        </div>
    );
};  

export default index;
