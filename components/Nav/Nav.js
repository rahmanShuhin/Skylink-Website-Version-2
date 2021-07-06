import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";
import white_logo from "../../assets/images/white_logo.svg";

import { useState } from "react";
const Nav = () => {
    const [top, setTop] = useState(true);
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
            var y = window.scrollY;
            if (y > 0) {
                setTop(false);
            } else {
                setTop(true);
            }
        });
    }
    return (
        <nav className={top ? "nav" : "nav white__bg"}>
            <div>
                <div className="nav__left">
                    <Link href="/">
                        {top ? (
                            <Image
                                src={white_logo}
                                alt="SkyLink Creative"
                                width={150}
                                height={50}
                            />
                        ) : (
                            <h2>SkyLink Creative</h2>
                        )}
                    </Link>
                </div>
                <div className="nav__right ">
                    <Link href="/home">Home</Link>
                    <span>
                        Services <ExpandMoreIcon></ExpandMoreIcon>
                        <ul>
                            <li>
                                <Link href="/services/web-development/">
                                    Custom Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/web-development/">
                                    WordPress Website
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/web-development/">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/web-development/">
                                    Affiliate Website
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
            </div>
        </nav>
    );
};

export default Nav;
