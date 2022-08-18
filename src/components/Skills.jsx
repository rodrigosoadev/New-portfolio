import React from 'react'
import colorSharp from '../assets/img/color-sharp.png'
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className='item' id='react'>
                  <DiReact />
                  <h5>ReactJs</h5>
                </div>
                <div className='item' id='javascript'>
                  <DiJavascript1 />
                  <h5>Javascript</h5>
                </div>
                <div className='item' id='html'>
                  <DiHtml5 />
                  <h5>HTML</h5>
                </div>
                <div className='item' id='css'>
                  <DiCss3 />
                  <h5>CSS</h5>
                </div>
                <div className='item' id='bootstrap'>
                  <DiBootstrap />
                  <h5>Bootstrap</h5>
                </div>
                <div className='item' id='sass'>
                  <DiSass />
                  <h5>Sass</h5>
                </div>
                <div className='item' id='git'>
                  <DiGit />
                  <h5>Git</h5>
                </div>
                <div className='item' id='github'>
                  <DiGithubBadge />
                  <h5>Github</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills
