import React from "react";
import './About.scss';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

let o1 = 'https://i.imgur.com/lOG7JMC.jpg'
let o2 = 'https://i.imgur.com/xhFxn3Q.png'
let o3 = 'https://i.imgur.com/8btyeHi.jpg'
let o4 = 'https://i.imgur.com/1up8ReU.jpg'
let o5 = 'https://i.imgur.com/WYleF2f.jpg'
let o6 = 'https://i.imgur.com/YHiXkfM.jpg'
let o7 = 'https://i.imgur.com/XLGjpfm.jpg'
let o8 = 'https://i.imgur.com/k1XFcth.jpg'
let o9 = 'https://i.imgur.com/RsB6yji.jpg'
let o10 = 'https://i.imgur.com/VhDmbm8.jpg'

const meAndBoard = 'https://i.imgur.com/CatluO0.jpg'



const About = () => {
  const greetings = "Hello there!";

  const aboutme = `I'm Mitchell O'Brien. I am a Software Engineer and I have a passion for problem solving and working with others. With continuous learning as one of my core values, I am seeking an opportunity to utilise my skills developed as an educator with my natural aptitude for analytical and innovative thinking.`;

  const extendedAboutme = `Throughout General Assembly’s Software Engineering Immersive course, I have learnt what an ‘engineering mindset’ means and how to apply this way of thinking to full-stack development. My current skills include JavaSciprt, HTML/CSS, Ruby, SQL/PostgreSQL, Git and a wide range of workplace tech such as cloud resources. I am looking forward to extending my learning in the areas of Python and Java.`;

  const imagesHeading = `Some of my favourite places (and of course my dog).`

  const images = [ o1, o2, o3, o4, o5, o6, o7, o8, o9, o10 ];

  return (
    <section id="about">
      <div className='mainAbout'>
        <div className="about">
          <div className="personalImg">
            <img className="meAndBoard" src={meAndBoard} alt="" />
          </div>
          <div className="_content_wrapper">
          <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <div component='span'> Send me a message.</div>
            </a>
            <div component='h2' variant="h5">
              <div text={`${greetings}`} />
            </div>
              <p className="aboutme">{aboutme} </p>
              <p className="larger">{extendedAboutme}</p>
          </div>
        </div>
        <div className="minHeading">{imagesHeading}</div>
      </div>
      <div className="slideshow">
        <Slide>
          {images.map((image, index) => 
            <div key={index} className="each-slide-effect">
              <div>
                <img  src={image} alt="" />
              </div>
            </div>
          )}
        </Slide>
      </div>
    </section>
  );
};

export default About;