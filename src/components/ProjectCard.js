import Image from "next/image";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="project-card"
        onClick={() => onClick(project)}
        style={{ cursor: 'pointer' }}
      >
        <div className="project-img">
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={350}
            className="img-fluid"
          />
        </div>

        <div className="project-content">
          <h5>{project.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
