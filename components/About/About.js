import React from 'react';
import Image from "next/image";
import logo from "../../assets/images/about-icon-1.png"
import ReactCardFlipper from "react-card-flipper";

const data = [
  {
    id: 1,
    img: logo,
    header: "We are creative",
    text: "We are masters in innovative, agile creative approach in producing websites. Our refreshing way of working brings the best possible results for our clients. We deliver beautifully crafted projects with passion."
  },
  {
    id: 2,
    img: logo,
    header: "We love our services",
    text: "Our approach to work process, from sketch to development, is focused towards creating an unforgettable user impression. It’s true magic when the concept comes to life in a pixel-perfect design and fully functional website. Take a look at our portfolio to see just a few recent projects that we have worked on. "
  },
  {
    id: 3,
    img: logo,
    header: "We use the latest technologies",
    text: "We create highly-usable websites that are powered by an array of technologies and then we analyze performance data to optimize and refine."
  },
  {
    id: 4,
    img: logo,
    header: "Best team",
    text: "Our team provides personal, professional and friendly service which carefully considers your business goals and requirements. We transform innovative visions into brilliant realities. Got one? Let’s make outstanding work together!"
  },
]

const About = () => {
  return (
    <div className="about">
      <h2>About us</h2>
      <div className="about_container">
        <ReactCardFlipper width="300px" height="450px" behavior="hover">
          <div className='card_face_one'>
            <Image src={ logo } alt="Picture of the author" />
            <h3>We are creative</h3>
            <p>We are masters in innovative, agile creative approach in producing websites.</p>
          </div>
          <div className='card_face_one'>
            <h3>We are creative</h3>
            <p>We create highly-usable websites that are powered by an array of technologies and then we analyze performance data to optimize and refine.</p>
          </div>
        </ReactCardFlipper>

        <ReactCardFlipper width="300px" height="450px" behavior="hover">
          <div className='card_face_two'>
            <Image src={ logo } alt="Picture of the author" />
            <h3>We love our services</h3>
            <p>Our approach to work process, from sketch to development, is focused towards</p>
          </div>
          <div className='card_face_two'>
            <h3>We are creative</h3>
            <p>Our approach to work process, from sketch to development, is focused towards creating an unforgettable user impression. It’s true magic when the concept comes to life in a pixel-perfect design and fully functional website. </p>
          </div>
        </ReactCardFlipper>

        <ReactCardFlipper width="300px" height="450px" behavior="hover">
          <div className='card_face_three'>
            <Image src={ logo } alt="Picture of the author" />
            <h3>We use the latest technologies</h3>
            <p>We create highly-usable websites that are powered by an array of technologies</p>
          </div>
          <div className='card_face_three'>
            <h3>We are creative</h3>
            <p>We create highly-usable websites that are powered by an array of technologies and then we analyze performance data to optimize and refine.</p>
          </div>
        </ReactCardFlipper>

        <ReactCardFlipper width="300px" height="450px" behavior="hover">
          <div className='card_face_four'>
            <Image src={ logo } alt="Picture of the author" />
            <h3>Best team</h3>
            <p>Our team provides personal, professional and friendly service which carefully</p>
          </div>
          <div className='card_face_four'>
            <h3>We are creative</h3>
            <p>Our team provides personal, professional and friendly service which carefully considers your business goals and requirements. We transform innovative visions into brilliant realities. Got one? Let’s make outstanding work together! </p>
          </div>
        </ReactCardFlipper>
      </div>
    </div>
  );
};

export default About;