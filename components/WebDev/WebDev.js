import React, { useEffect } from 'react';
import Lottie from "react-lottie";
import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import dev from "../../assets/images/icon-api.svg";
import frontend from "../../assets/images/custom-web-development-frontend.jpg";
import backend from "../../assets/images/custom-web-development-backend.jpg";
import ecommerce from "../../assets/images/custom-web-development-ecommerce.jpg";
import * as animationData from "../../assets/lottie files/39998-web-development.json";
import Contact from '../Contact/Contact';


const WebDev = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const data = [
    {
      id: 1,
      img: frontend,
      head: 'FRONT-END CUSTOM DEVELOPMENT',
      body: 'Our front-end functional pieces are custom-fit, built-from-scratch solutions that aren’t just exceptionally easy to maintain and expand on; they’re also reliable and stable. Our dedicated team of experienced web developers create custom online solutions. Whether it is enhancing an existing application or architecting an enterprise application, our developers are up for the challenge. By focusing on the specific needs and goals of our clients, Evolve develops custom web solutions that deliver results.',
    },
    {
      id: 2,
      img: backend,
      head: 'BACK-END CUSTOM PROGRAMMING',
      body: 'The back end of a website is comprised of complicated code that’s never seen or interacted with, but drives the whole show. It’s what allows our developers to tie into databases, process form data and more. It’s the driving force behind your site. 90% of new websites will have the need for some custom back-end web programming. This customization allows you to integrate your in-house data systems, keep your data in sync, and add dynamic content and flexibility. As with everything we do, all of our web solutions are tailored to your specific needs. If you have an idea or vision, we can build it.',
    },
    {
      id: 3,
      img: ecommerce,
      head: 'E-COMMERCE DEVELOPMENT',
      body: 'Boosting sales is the goal of our ecommerce web design services. We offer online shops of varying complexity, from simple to extremely complex. Our ecommerce sites offer ultimate simplicity to both the end-user and website administrator.Our ecommerce websites combine the latest technologies with the custom designs we’re known for. We create unique ecommerce solutions using no ready-made templates, resulting in proven SEO-, mobile- and user-friendly online shops. Our go-to platforms also provide detailed reports and high levels of security.',
    }
  ]

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="webDev">
        <div>
          <div>
            <h1>Custom Website Development</h1>
            <p>
              Break away from the ordinary with a unique, custom-developed website built just for you.
            </p>
            <button>Start a Conversation</button>
          </div>
          <div className="lottie_files">
            <Lottie options={ defaultOptions } />
          </div>
        </div>
      </div>
      <div className="webDev_container">
        <h1>GET A CUSTOM WEBSITE THAT'S NOT JUST BEAUTIFUL, </h1>
        <h1>IT'S WRITTEN AND DESIGNED TO BRING IN MORE BUSINESS.</h1>
        <div class="webDev_container__grid">
          <div class="webDev_container__item">
            <div class="webDev_container__icon">
              <Image src={ dev } alt="Picture of the author" />
            </div>
            <div class="webDev_container__title">
              ANALYSIS & STRATEGY
            </div>
            <div class="webDev_container__description">
              A great Custom website starts with research. Your team (Project Manager, Writer, Website Designer, & Website Developer) will research and create a winning plan based on your audience, competition, and goals.
            </div>
          </div>

          <div class="webDev_container__item">
            <div class="webDev_container__icon">
              <Image src={ dev } alt="Picture of the author" />
            </div>
            <div class="webDev_container__title">
              CONTENT WRITING
            </div>
            <div class="webDev_container__description">
              Helping visitors understand the advantages of working with or buying from you is key to success. Once a strategy is in place for the custom website, our team writes content that is clear, concise, and compelling.
            </div>
          </div>

          <div class="webDev_container__item">
            <div class="webDev_container__icon">
              <Image src={ dev } alt="Picture of the author" />
            </div>
            <div class="webDev_container__title">
              CUSTOM WEBSITE DESIGN & DEVELOPMENT
            </div>
            <div class="webDev_container__description">
              Custom Website Design is about a lot more than creating a pretty picture. We will use our training in color theory, typography, and image selection to drive your visitors' attention where we want it to go.
            </div>
          </div>

          <div class="webDev_container__item">
            <div class="webDev_container__icon">
              <Image src={ dev } alt="Picture of the author" />
            </div>
            <div class="webDev_container__title">
              CUSTOM WEBSITE LAUNCH
            </div>
            <div class="webDev_container__description">
              Once it's passed our QA & Testing your custom website is ready to share with the world. Our support does not stop once the website is live. We're here to answer questions, and training is always free for your website.
            </div>
          </div>
        </div>
        <h1>OUR CUSTOM WEB </h1> <h1>DEVELOPMENT SERVICES</h1>
        <p>We strive to develop customized responsive web development solutions, not cookie-cutter projects. Each website we develop is truly unique, tailored to your users’ needs. Our custom web builds do not rely on templates, plugins or “found code.” This allows us to provide you with a custom-built, user-friendly, stable, and reliable website.</p>

        {
          data.map(x => (
            <div className="custom_service" key={ x.id }>
              <div className="custom_service_img" data-aos="fade-up">
                <Image src={ x.img } alt="Picture of the author" />
              </div>
              <div className="custom_service_text">
                <h3>{ x.head }</h3>
                <p>{ x.body }</p>
              </div>
            </div>
          ))
        }

      </div>
      <Contact></Contact>
    </div>
  );
};

export default WebDev;