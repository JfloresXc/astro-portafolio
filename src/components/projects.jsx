import { useState } from "react";
import PROJECTS from "../services/projects.json";
import "../css/projects.css";

let DEFAULT_PROJECT = {
  title: "Lemlist",
  description: "Lemlist description",
  slogan: "Slogan Chatra",
  brand: "BRAND 1",
  image: "storage/notesbook.png",
};

export default function Projects() {
  const [project, setProject] = useState(
    PROJECTS[0] || DEFAULT_PROJECT
  );
  const { brand, description, slogan, title, urlImage, link } =
    project;
  const [indexSelected, setIndexSelected] = useState(0);

  function renderProject(renderedProject) {
    setProject({ ...project, ...renderedProject });
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__header animate__animated">
        <div className="projects__group-1">
          <div className="projects__brand" id="project-brand">
            {brand}
          </div>
          <div className="projects__group-2">
            <div className="projects__slogan" id="project-slogan">
              {slogan}
            </div>
            <div
              className="projects__header-title"
              id="project-title"
            >
              {title}
            </div>
            <div
              className="projects__description"
              id="project-description"
            >
              {description}
            </div>
            <a
              href={link}
              target="_blank"
              className="projects__link"
              id="project-link"
            >
              <i className="fa-solid fa-link"></i> Visitar
            </a>
          </div>
          <img
            className="projects__image"
            src={urlImage}
            alt="page-notesbook"
            id="project-image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="projects__body">
        <h3 className="projects__body-title">Proyectos</h3>
        <div className="projects__list">
          {PROJECTS.map((projectKey, index) => (
            <li
              key={index}
              className={`projects__item ${
                indexSelected == index && "projects__item-active"
              }`}
              onClick={() => {
                renderProject({ ...projectKey });
                setIndexSelected(index);
              }}
            >
              {projectKey.title}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
