import Particle from "../Particle_Bg/Particle";
import Image from "next/image";
import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie files/48945-launch.json";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Landing = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="hero">
            <Particle></Particle>
            <div className="hero__content">
                <div>
                    <h2>
                        Grow your business with{" "}
                        <span
                            style={{
                                color: "#de5630",
                                padding: "10px",
                            }}
                        >
                            SKYLINK CREATIVE
                        </span>{" "}
                    </h2>
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
                <div className="lottie__file">
                    <Lottie options={defaultOptions} height={600} width={600} />
                </div>
            </div>

            <MessengerCustomerChat
                pageId="100508642002118"
                appId="1404533659925082"
            />
        </div>
    );
};

export default Landing;
