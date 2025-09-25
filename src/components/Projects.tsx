import React from "react";

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: { [key: string]: Project } = {
    project1: { name: "Bite Buddy", description: "First project", link: "https://github.com/mustafa-nom/BiteBuddy" },
    project2: { name: "Representative Tracker", description: "Second project", link: "https://github.com/mustafa-nom/RepTracker" },
    project3: { name: "YouTube Anti-Recommender", description: "First project", link: "https://github.com/DevionRosa/YouTubeAntiRecommender" },
    project4: { name: "Discord Chat Bot", description: "Second project", link: "https://github.com/DevionRosa/Discord-Bot" },
    project5: { name: "NFL Concussions Analysis", description: "First project", link: "https://github.com/DevionRosa/Concussion-Injuries" },
    project6: { name: "Voter Registration Analysis", description: "Second project", link: "https://github.com/DevionRosa/VotersDataAnalysis" },
    project7: { name: "Multi-Machine Chatroom", description: "First project", link: "https://github.com/DevionRosa/Multi-Machine-Console-Chatroom" },
    project8: { name: "Stock Comparison", description: "Second project", link: "https://github.com/DevionRosa/stockcomparison" },
    project9: { name: "Flappy Bird", description: "First project", link: "https://github.com/DevionRosa/Flappy-Bird" }
};

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      {Object.keys(projects).map((key) => (
        <div key={key} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{projects[key].name}</h2>
          <p>{projects[key].description}</p>
          <a href={projects[key].link} className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
