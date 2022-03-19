import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie files/37797-jumping-cube.json";
import Link from "next/link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Services = () => {
  const [active, setActive] = useState(0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="services">
      <p>What We Offer</p>
      <h2>Services</h2>
      <div className="services__for__big__screen">
        <div className="services__left">
          {services.map((service, index) => (
            <div
              key={index}
              className={
                index === active
                  ? "services__left__card active"
                  : "services__left__card"
              }
              onClick={() => setActive(index)}
            >
              {service.name}
            </div>
          ))}
        </div>
        <div className="services__right">
          <div className="services__right__lang">
            {services[active].languages.map((lang, index) => (
              <span key={index}>{lang}</span>
            ))}
          </div>
          <div className="services__right__catg">
            {services[active].category.map((catg, index) => (
              <p key={index}>
                <ArrowForwardIcon></ArrowForwardIcon> {catg}
              </p>
            ))}
          </div>

          <Link href={services[active].link}>Read More</Link>
        </div>
      </div>
      <div className="box__shape__anim lottie__file">
        <Lottie options={defaultOptions} width={350} />
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    id: 1,
    name: "Web development Services",
    category: [
      "Website development",
      "Business Website",
      "Startup Website",
      "Landing & promo sites",
      "E-commerce",
      "Wordpress development",
    ],
    languages: [
      "Javascript",
      "HTML5",
      "CSS3",
      "jQuery",
      "React Js",
      "Node Js",
      "mongoDB",
      "MySQL",
    ],
    link: "/services/web-development/",
  },
  {
    id: 2,
    name: "Design Services",
    category: [
      "Website design",
      "UX, UI design",
      "Mobile App Design",
      "Logo Design",
    ],
    languages: ["Photoshop", "Figma", "Illustrator", "Adobe XD"],
    link: "/services/ui-ux/",
  },
  {
    id: 3,
    name: "SEO Services",
    category: ["Tech SEO", "On-page SEO", "Off-page SEO", "SEO copywriting"],
    languages: ["Google Analytics", "Webmaster tools"],
    link: "/services/seo/",
  },
  {
    id: 4,
    name: "Content Writing",
    category: [
      "Content Writing",
      "Keyword Research",
      "Content Planning",
      "Content Editing",
    ],
    languages: [],
    link: "/services/web-development/",
  },
];
