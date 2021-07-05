import Particle from "../Particle_Bg/Particle";
import Image from "next/image";

const Landing = () => {
    return (
        <div className="hero">
            <Particle></Particle>
            <div className="hero__content">
                <div>
                    <h2>Web Development Agency</h2>
                    <p>
                        F5 Studio is a web development agency. Our experienced
                        web designers, UX/UI specialists, web developers, SEOs,
                        digital marketers and managers specialize in business
                        websites creation. We will deliver you marketing and
                        technology solutions to achieve your company's goals in
                        the best way.
                    </p>
                    <button>Hire Us</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
