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
            Grow your business with <span>Skylink Creative</span>{" "}
          </h2>
          <p>
            It's time to take your business global. Marketing is not one size
            fits all and the world of digital marketing has evolved drastically
            in recent years, but it seems like every small-to-medium sized
            company is doing their own thing. That's where we come in.
          </p>
          <button>
            <a href="https://www.facebook.com/skylinkcreative">Hire Us</a>
          </button>
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
