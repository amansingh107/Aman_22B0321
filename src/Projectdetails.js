import React from 'react'

export default function Projectdetails() {
  return (
    <div className="projects">
    <h2>Our Projects</h2>
    <div className="project-cards">
      <div className="project-card">
        <img src="project1-image.jpg" alt="Project 1 Image"/>
        <h3>Project 1 Name</h3>
        <p>Project 1 Member 1, Project 1 Member 2</p>
      </div>
      <div className="project-card">
        <img src="project2-image.jpg" alt="Project 2 Image"/>
        <h3>Project 2 Name</h3>
        <p>Project 2 Member 1, Project 2 Member 2</p>
      </div>
      <div className="project-card">
        <img src="project3-image.jpg" alt="Project 3 Image"/>
        <h3>Project 3 Name</h3>
        <p>Project 3 Member 1, Project 3 Member 2</p>
      </div>
    </div>
  </div>
  )
}
