import { Col } from "react-bootstrap";

 const ProjectCard = ({ title, description, imgUrl, toView }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={toView} target='blank'><p>To view</p></a>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard

                            