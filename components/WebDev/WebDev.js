import React from 'react';
import Lottie from "react-lottie";
import Image from "next/image";
import dev from "../../assets/images/icon-api.svg";
import * as animationData from "../../assets/lottie files/39998-web-development.json";
import Contact from '../Contact/Contact';

const WebDev = () => {
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
            <Lottie options={ defaultOptions }  />
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
        <h1>OUR CUSTOM WEB DEVELOPMENT SERVICES</h1>
        <p>We strive to develop customized responsive web development solutions, not cookie-cutter projects. Each website we develop is truly unique, tailored to your users’ needs. Our custom web builds do not rely on templates, plugins or “found code.” This allows us to provide you with a custom-built, user-friendly, stable, and reliable website.</p>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default WebDev;