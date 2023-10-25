// Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'project2.jpg',
  },
  // Add more project data
];

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
