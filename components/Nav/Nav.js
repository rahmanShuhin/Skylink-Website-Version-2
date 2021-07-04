import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <Link href="/">
                    {/* <img className="logo" src={logo} alt="SkyLink Creative" /> */}
                    SKYLINK CREATIVE
                </Link>
            </div>
            <div className="nav__right">
                <Link href="/home">Home</Link>
                <span>
                    Services <ExpandMoreIcon></ExpandMoreIcon>
                    <ul>
                        <li>
                            <Link href="/services/web-development/">
                                Custom Website Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/web-development/">
                                WordPress Website Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/web-development/">
                                UI/UX Design
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/web-development/">
                                Done For You Affiliate Website
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/web-development/">
                                Search Engine Optimization (SEO)
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/web-development/">
                                Content Writing
                            </Link>
                        </li>
                    </ul>
                </span>
                <Link href="/home">About</Link>
                <Link href="/home">Contact us</Link>
            </div>
        </nav>
    );
};

export default Nav;
