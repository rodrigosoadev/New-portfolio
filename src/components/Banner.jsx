import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Front-end"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
    }

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Rodrigo`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Front-end" ]'><span className="wrap">{text}</span></span></h1>
                    <p>My name is Rodrigo Soares and I am passionate about technology. My first contact with programming was in 2014 when I was not yet fundamental. Despite liking the area, it was only possible to give it the proper focus in 2021, after a Workshop at the old school. I recognize myself, as excited about new market technologies with learning acquired day after day. I have a focus on development with Javascript, React, Html, Css among other technologies used to create web applications. I consider myself smart and consistent in learning a new language and I adapt to any change, ready to overcome any challenge! I could define it in 3 words, I would certainly always be: idealized, per se configured!</p>
                   
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
    }

export default Banner
