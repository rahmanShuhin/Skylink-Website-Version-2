import Head from "next/head";
import Affiliate from "../../../components/Affiliate/Affiliate";
const index = () => {
    return (
        <div>
            <Head>
                <title>SkyLink Creative | Web development Agency</title>
                <meta name="description" content="SkyLink Creative" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Affiliate></Affiliate>
            </main>
        </div>
    );
};

export default index;
