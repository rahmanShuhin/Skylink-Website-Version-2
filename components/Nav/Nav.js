import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";
import white_logo from "../../assets/images/white_logo.svg";
import { useRef, useState } from "react";
const Nav = () => {
    const [top, setTop] = useState(true);
    const hamburgerRef = useRef();
    const navLinkRef = useRef();
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", (event) => {
            var y = window.scrollY;
            var w = window.innerWidth;
            if (y > 0 && w > 1023) {
                setTop(false);
            } else {
                setTop(true);
            }
        });
    }
    const handleBurger = () => {
        hamburgerRef.current.classList.toggle("animate");
        navLinkRef.current.classList.toggle("hamburger__menu__active");
    };

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
                {/* nav menu for desktop */}
                <div className="nav__right " ref={navLinkRef}>
                    <Link href="/">Home</Link>
                    <span>
                        <p>
                            Services <ExpandMoreIcon></ExpandMoreIcon>
                        </p>
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
                {/* mobile hamburger menu */}
                <div className="menu-wrapper" onClick={handleBurger}>
                    <div ref={hamburgerRef} className="hamburger-menu"></div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
