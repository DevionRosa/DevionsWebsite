import React from "react";

interface Project {
  name: string;
  description: string;
  link: string;
  img: string;
}

const projects: { [key: string]: Project } = {
  project1: {
    name: "Bite Buddy",
    description: "BiteBuddy is an AI-powered nutrition planner that reduces food waste by generating personalized recipe ideas from ingredients you already have. It also creates customized meal plans based on your mood, dietary needs, and preferences. I worked as a full-stack developer for this project, optimizing Gemini responses using prompt engineering, and designing interactive and appealing components.",
    link: "https://github.com/mustafa-nom/BiteBuddy",
    img: new URL("../assets/BiteBuddyimg.png", import.meta.url).href
  },

  project2: {
    name: "Representative Tracker",
    description: "This project allows users to find their local congressional representatives, analyze voting records/statements, & generate AI-based summaries using Google Gemini. My main role was a backend developer where I focused on fetching legislation and adding it to the database to speed up time.",
    link: "https://github.com/mustafa-nom/RepTracker",
    img: new URL("../assets/RepTrackerimg.png", import.meta.url).href
  },

  project3: {
    name: "YouTube Anti-Recommender",
    description: "This project calls the YouTube API to extract metadata from a video using its URL, and generates antonyms using Google Gemini's API, and then searches YouTube using these new tags to come up with anti-recommendations. My work mainly consisted of fetching metadata and prompt engineering Gemini. We plan to make this a Chrome Extenstion.",
    link: "https://github.com/DevionRosa/YouTubeAntiRecommender",
    img: new URL("../assets/YouTubeRecimg.png", import.meta.url).href
  },

  project4: {
    name: "Discord Chat Bot",
    description: "When playing unfamiliar or familiar games scouring the wiki to look for specific items takes too much time out of your gameplay. To combat this I developed a discord bot that utilizes web scraping and natural language processing (NKP) to cut down on the time spent viewing the wiki, while also getting the information you need to have a successful playthrough.",
    link: "https://github.com/DevionRosa/Discord-Bot",
    img: new URL("../assets/DiscordBotimg.png", import.meta.url).href
  },

  project5: {
    name: "NFL Concussions Analysis",
    description: "Conducted exploratory data analysis (EDA) to visualize trends in NFL concussions and also developed predictive models to assess concussion likelihood and forcast recovery timelines.",
    link: "https://github.com/DevionRosa/Concussion-Injuries",
    img: new URL("../assets/NFLConcussionsimg.png", import.meta.url).href
  },

  project6: {
    name: "Voter Registration Analysis",
    description: "Applied time-series and comparative analysis to assess voter spikes, informing historical context and trend forecasting. Also, created geographic visualizations to illustrate regional disparities and highlight population-driven registration patterns.",
    link: "https://github.com/DevionRosa/VotersDataAnalysis",
    img: new URL("../assets/VoterAnalysisimg.png", import.meta.url).href
  },

  project7: {
    name: "Multi-Machine Chatroom",
    description: "Using Java sockets and threads, I created a ChatRoom that was accessable on multiple machines. Some of the features include personalized text colors, 6 or more users, and under 100ms latency.",
    link: "https://github.com/DevionRosa/Multi-Machine-Console-Chatroom",
    img: new URL("../assets/ChatRoomimg.png", import.meta.url).href
  },

  project8: {
    name: "Flappy Bird",
    description: "A python application replicating the famous Flappy Bird game. Consisted of an interactive menu, live score counter, saved high scores, and Flappy Bird game logic.",
    link: "https://github.com/DevionRosa/Flappy-Bird",
    img: new URL("../assets/FlappyBirdimg.png", import.meta.url).href
  }
};

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      {Object.keys(projects).map((key) => (
        <div key={key} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{projects[key].name}</h2>
          <p>{projects[key].description}</p>
          <img
            src={projects[key].img}
            alt={projects[key].name}
            
          />
          <a href={projects[key].link} className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
