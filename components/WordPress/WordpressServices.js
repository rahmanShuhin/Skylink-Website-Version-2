import React from "react";
import { BsImages } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GiPencilRuler } from "react-icons/gi";

const WordpressServices = () => {
  return (
    <div className="container">
      <div>
        <h1>Top-notch WordPress web design services</h1>
        <h3>
          Learn our professional WordPress website design <br /> services
        </h3>
        <div className="service">
          <div className="service-list">
            <div className="icon-container">
              <FiEdit className="icon" />
            </div>
            <div className="content">
              <h2>Intelligent WordPress web design</h2>
              <p>
                At FreshySites, we pride our WordPress website design company on
                beautiful and intelligent WordPress web design services. In
                today’s increasingly competitive online marketplace, it is not
                enough to have a website. You need an intelligently designed
                website that makes it easy for your customers to find what they
                need and make a purchase or schedule an appointment online. You
                need a WordPress agency in your corner, dedicated to you and the
                success of your business.
              </p>
            </div>
          </div>

          <div className="service-list">
            <div className="icon-container">
              <BsImages className="icon" />
            </div>
            <div className="content">
              <h2>Helping clients with WordPress web design services</h2>
              <p>
                We have been offering WordPress web design services since 2011
                and in that time we have gathered over 300 5-star reviews of our
                WordPress services on Google. FreshySites has completed 2,200+
                WordPress website design and development projects since our
                founding. Our WordPress agency team of talented web designers,
                account managers, project managers, and customer support
                personnel works tirelessly to create websites you will be proud
                to show off to the world. Our unique approach to client support
                is what distinguishes our WordPress website design services us
                from our competitors. Continue reading to learn about the
                FreshySites story and what sets our WordPress web design
                services apart.
              </p>
            </div>
          </div>
          <div className="service-list">
            <div className="icon-container">
              <GiPencilRuler className="icon" />
            </div>
            <div className="content">
              <h2>What is WordPress website design?</h2>
              <p>
                WordPress website design is website construction using the
                WordPress CMS and framework. While this tool began as a simple
                blogging platform, it has evolved into a complex, full-featured
                website design tool. It’s simple theme-based design options make
                it easy for users to create their own websites or hire a
                professional company — that specializes in WordPress services —
                to do the heavy lifting. Either way, it couldn’t be easier to
                manage and update the website ongoing; especially with an
                experienced team of WordPress experts dedicated to WordPress web
                design services.
              </p>
            </div>
          </div>
          <div className="service-list">
            <div className="icon-container">
              <FaHandshake className="icon" />
            </div>
            <div className="content">
              <h2>We do more than just basic WordPress web design</h2>
              <p>
                Our WordPress web design company does not stop with just a basic
                site design. Your site needs to be optimized for mobile, it
                should be responsive, it should be optimized for Google and
                integrated with things like Google Analytics, Google Search
                Console, etc. While you are the expert in your business, we are
                the experts in WordPress website design. There are no
                cookie-cutter sites in our portfolio. Your website will be
                unique to you and designed to put your best foot forward on the
                web. Feel free to review our previous WordPress projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressServices;
