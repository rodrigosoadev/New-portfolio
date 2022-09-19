import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import fitclub from "../assets/img/fitclub.jpg";
import costs from "../assets/img/costs.jpg";
import fineart from "../assets/img/fineart.jpg";
import lacollection from "../assets/img/lacollection.jpg";
import logindark from "../assets/img/logindark.jpg";
import cloneNetflix from "../assets/img/cloneNetflix.jpg";
import spotifyClone from "../assets/img/spotifyClone.jpg";
import guessNumber from "../assets/img/guessNumber.jpg";
import geradorSenha from "../assets/img/geradorSenha.jpg";
import formulario from "../assets/img/formulario.jpg";
import calculadora from "../assets/img/calculadora.jpg";
import moviesLib from "../assets/img/moviesLib.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import coffee from "../assets/img/coffee.jpg";
import hora from "../assets/img/hora.jpg";
import tabela from "../assets/img/tabela.jpg";
import lampada from "../assets/img/lampada.jpg";
import semafaro from '../assets/img/semafaro.jpg'

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Project = () => {

  const projects = [
    {
      title: "Fit Club - Ecommerce",
      description: "Reactjs and bootstrap",
      imgUrl: fitclub,
      toView: 'https://effortless-gingersnap-3d6129.netlify.app/'
    },
    {
      title: "Costs",
      description: "ReactJs and internal API",
      imgUrl: costs,
      toView: 'https://rococo-strudel-450438.netlify.app/'
    },
    {
      title: "Business Startup",
      description: "Reactjs and bootstrap",
      imgUrl: fineart,
      toView: 'https://funny-yeot-22b47e.netlify.app/'
    },
    {
      title: "Netflix clone",
      description: "Reactjs and external API",
      imgUrl: cloneNetflix,
      toView: 'https://jolly-biscotti-c22cbd.netlify.app/'
    },
    {
      title: "Portfolio",
      description: "ReactJs and Sass",
      imgUrl:portfolio,
      toView: 'https://strong-cobbler-73c19b.netlify.app/'
    },
    {
      title: "Business Startup",
      description: "Reactjs and bootstrap",
      imgUrl: lacollection,
      toView: 'https://thriving-daffodil-8b1f80.netlify.app/'
    },
  ];

  const projectTabTwo = [
    {
      title: "Movies",
      description: "ReactJs and external API",
      imgUrl: moviesLib,
      toView: 'https://chimerical-kheer-4ab3da.netlify.app/'
    },
    {
      title: "Password generator",
      description: "Html, css and javascript",
      imgUrl: geradorSenha,
      toView: 'https://famous-banoffee-5b0902.netlify.app/'
    },
    {
      title: "Player music",
      description: "Html, css and javascript",
      imgUrl: spotifyClone,
      toView: 'https://quiet-gaufre-0e9d9d.netlify.app/'
    },
    {
      title: "Guess number",
      description: "Html, css and javascript",
      imgUrl: guessNumber,
      toView: 'https://illustrious-melba-4272c0.netlify.app/' 
    },
    {
      title: "Calculator",
      description: "Html, css and javascript",
      imgUrl: calculadora,
      toView: 'https://gentle-dodol-6dced5.netlify.app/'
    },
    {
      title:"Coffee",
      decription: "Html, css and javascript",
      imgUrl: coffee,
      toView:'https://idyllic-biscochitos-961acd.netlify.app/'
    }
  ];

  const projectTabThree = [
    {
      title: "Form",
      description: "Html and Css",
      imgUrl: formulario,
      toView: 'https://joyful-peony-3ab22d.netlify.app/'
    },
    {
      title: "Login Dark themer",
      description: "Design & Development",
      imgUrl: logindark,
      toView: 'https://stupendous-axolotl-ce42e0.netlify.app/'
    },
    {
      title: "Lamp",
      description: "Html, css and javascript",
      imgUrl: lampada,
      toView: 'https://stellar-truffle-a788f5.netlify.app/'
    },
    {
      title: "Watch",
      description: "Html, css and javascript",
      imgUrl: hora,
      toView: 'https://scintillating-peony-a38f48.netlify.app/'
    },
    {
      title: "Table",
      description: "Html, css and javascript",
      imgUrl: tabela,
      toView: 'https://frabjous-gelato-fba250.netlify.app/'
    },
    {
      title: "Traffic light",
      description: "Html, css and javascript",
      imgUrl: semafaro,
      toView: 'https://lovely-chebakia-aae6a4.netlify.app/'
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Academic and personal projects
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectTabTwo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectTabThree.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Project