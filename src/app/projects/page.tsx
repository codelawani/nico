import { projects } from "../site/config";
import ProjectCard from "../components/projectCard";
function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Projects;
