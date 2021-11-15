import AcUnitIcon from "@mui/icons-material/AcUnit";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie files/23613-animation-seo-traffic.json";
import Contact from "../Contact/Contact";

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
        <>
            <div className="seoHero">
                <div>
                    <div>
                        <p>BEST SEARCH ENGINE OPTIMIZATION SERVICES</p>
                        <h1>SEO Marketing Services</h1>
                        <p>
                            We’ve taken the mystery out of SEO strategy with
                            proven methods that bring your target audience to
                            your website, such as: keyword research, link
                            building, page optimizations, technical SEO,
                            competitive analysis, and SEO content services.
                        </p>
                        <button>Start a Conversation</button>
                    </div>
                    <div className="lottie__file">
                        <Lottie
                            options={defaultOptions}
                            height={600}
                            width={600}
                        />
                    </div>
                </div>
            </div>
            <div className="seo__middle">
                <div>
                    <MiscellaneousServicesIcon></MiscellaneousServicesIcon>
                    <h4>Custom SEO Services</h4>
                    <p>
                        From link building and keyword research, to page
                        optimization and technical SEO, to competitor analysis
                        and more, we're experts at providing search engine
                        optimization customized to your business goals.
                    </p>
                </div>
                <div>
                    <AcUnitIcon></AcUnitIcon>
                    <h4>SEO Strategies Designed for You</h4>
                    <p>
                        Every business is different, so we listen to your
                        marketing goals to drive the strategy behind your custom
                        SEO campaign. Then, we directly measure our success
                        based on those goals.
                    </p>
                </div>
                <div>
                    <AssessmentIcon></AssessmentIcon>
                    <h4>Track the ROI You Care About</h4>
                    <p>
                        Increased traffic to your website is meaningless if the
                        users visiting your site are not engaging with your site
                        in a meaningful way. We help you track the SEO ROI that
                        maps directly to your business.
                    </p>
                </div>
            </div>
            <Contact></Contact>
        </>
    );
};

export default SeoHero;
