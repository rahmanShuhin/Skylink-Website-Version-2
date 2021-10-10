import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie files/23613-animation-seo-traffic.json";
const SeoHero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="seoHero">
            <div>
                <div>
                    <p>BEST SEARCH ENGINE OPTIMIZATION SERVICES</p>
                    <h1>SEO Marketing Services</h1>
                    <p>
                        We’ve taken the mystery out of SEO strategy with proven
                        methods that bring your target audience to your website,
                        such as: keyword research, link building, page
                        optimizations, technical SEO, competitive analysis, and
                        SEO content services.
                    </p>
                    <button>Start a Conversation</button>
                </div>
                <div>
                    <Lottie options={defaultOptions} height={600} width={600} />
                </div>
            </div>
        </div>
    );
};

export default SeoHero;
