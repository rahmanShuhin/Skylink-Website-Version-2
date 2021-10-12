import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import serp from '../../assets/images/serp.png';
import content from '../../assets/images/content.png';
import response from '../../assets/images/response.png'
import setup from '../../assets/images/setup.png'
import support from '../../assets/images/support.png';


const Affiliate = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const data = [
    {
      id: 1,
      img: serp,
      head: 'SERP analysis & keyword research',
      body: 'Our team will identify all of the low hanging fruit when it comes to keyword opportunities. This is the important first step for building a site that will eventually attract profitable traffic.',
    },
    {
      id: 2,
      img: content,
      head: 'Content plan & development',
      body: 'Our team of native English writers and editors will produce highly engaging and optimized content by leveraging niche and keyword research. We’ll help you become an authoritative voice in your niche..',
    },
    {
      id: 3,
      img: response,
      head: 'Response-driven web design',
      body: 'Our experienced team of CRO and design specialists ensures your website is built to engage, convert and retain your traffic. We pay close attention to the details that drives results',
    },
    {
      id: 4,
      img: setup,
      head: 'Setup for on-page SEO success',
      body: 'We’ll optimize your website based on our years of testing and building profitable affiliate websites. This leaves you to focus on your off-page SEO.',
    },
    {
      id: 5,
      img: support,
      head: 'Ongoing support & growth game plan',
      body: "Once completed, we never leave you hanging. We provide you with SOPs & ongoing support so you or your team can hit the ground running and grow your site. If you'd like us to help you grow the site once we've built it, we can.",
    }
  ]
  return (
    <div>
      <div className="affiliate">
        <div>
          <div>
            <h1>Affiliate Websites</h1>
            <p>
              <b>The short-cut you've been waiting for!  Get an online business fast!</b> Our sites are designed and built by experts. The content is also written by our <br></br> in-house trained professionals.These sites are ready to rank and start earning out of the box.
            </p>
            <button>View Available Sites</button>
          </div>
          <div>
            <iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="500px" height="300px" src="https://www.youtube.com/embed/NWSVM47tMRE?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.humanproofdesigns.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-1_25="true" __idm_id__="476644353"></iframe>
          </div>
        </div>
      </div>


    <div className="what-we-do">
      <div className="we-do">
        <h1>Here's what we'll do for you</h1>
        <p>Do you already have a niche (or vertical) in mind? We take care of everything needed to build a<br></br> successful authority site, so you don’t have to. Here’s what you get:</p>
      </div>
      {
        data.map(x => (
          <div className="affiliate-service-container">
            <div className="affiliate-service" key={x.id}>
              <div className="affiliate-service-img" data-aos="fade-up">
                <Image src={x.img} />
              </div>
              <div className="affiliate-service-text">
                <h2>{x.head}</h2>
                <p>{x.body}</p>
              </div>
            </div>
          </div>
        ))
      }
      </div>

    </div>
  );
};

export default Affiliate;