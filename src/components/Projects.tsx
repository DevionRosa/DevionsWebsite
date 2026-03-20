import React from "react";

interface Project {
  name: string;
  description: string;
  link: string;
  img: string;
  tech: string[];
}

const projects: { [key: string]: Project } = {
  project1: {
    name: "Bite Buddy",
    description: "BiteBuddy is an AI-powered nutrition planner that reduces food waste by generating personalized recipe ideas from ingredients you already have. It also creates customized meal plans based on your mood, dietary needs, and preferences. I worked as a full-stack developer for this project, optimizing Gemini responses using prompt engineering, and designing interactive and appealing components.",
    link: "https://github.com/mustafa-nom/BiteBuddy",
    img: new URL("../assets/BiteBuddyimg.png", import.meta.url).href,
    tech: ["React", "FireBase", "Tailwind CSS", "Gemini API", "Spoonacular API"],
  },

  project2: {
    name: "Representative Tracker",
    description: "This project allows users to find their local congressional representatives, analyze voting records/statements, & generate AI-based summaries using Google Gemini. My main role was a backend developer where I focused on fetching legislation and adding it to the database to speed up time.",
    link: "https://github.com/mustafa-nom/RepTracker",
    img: new URL("../assets/RepTrackerimg.png", import.meta.url).href,
    tech: ["Python", "Flask", "SQLite", "Gemini API", "React", "Congress API"],
  },

  project3: {
    name: "YouTube Anti-Recommender",
    description: "This project calls the YouTube API to extract metadata from a video using its URL, and generates antonyms using Google Gemini's API, and then searches YouTube using these new tags to come up with anti-recommendations. My work mainly consisted of fetching metadata and prompt engineering Gemini. We plan to make this a Chrome Extenstion.",
    link: "https://github.com/DevionRosa/YouTubeAntiRecommender",
    img: new URL("../assets/YouTubeRecimg.png", import.meta.url).href,
    tech: ["YouTube API", "Gemini API", "Python", "SQLite"],
  },

  project4: {
    name: "Discord Chat Bot",
    description: "When playing unfamiliar or familiar games scouring the wiki to look for specific items takes too much time out of your gameplay. To combat this I developed a discord bot that utilizes web scraping and natural language processing (NLP) to cut down on the time spent viewing the wiki, while also getting the information you need to have a successful playthrough.",
    link: "https://github.com/DevionRosa/Discord-Bot",
    img: new URL("../assets/DiscordBotimg.png", import.meta.url).href,
    tech: ["Python", "NextCord", "BeautifulSoup", "Sentence Transformer", "Numpy", "Pickle"],
  },

  project5: {
    name: "NFL Concussions Analysis",
    description: "Conducted exploratory data analysis (EDA) to visualize trends in NFL concussions and also developed predictive models to assess concussion likelihood and forcast recovery timelines.",
    link: "https://github.com/DevionRosa/Concussion-Injuries",
    img: new URL("../assets/NFLConcussionsimg.png", import.meta.url).href,
    tech: ["Python", "Pandas", "Matplotlib", "Scikit-Learn"],
  },

  project6: {
    name: "Voter Registration Analysis",
    description: "Applied time-series and comparative analysis to assess voter spikes, informing historical context and trend forecasting. Also, created geographic visualizations to illustrate regional disparities and highlight population-driven registration patterns.",
    link: "https://github.com/DevionRosa/VotersDataAnalysis",
    img: new URL("../assets/VoterAnalysisimg.png", import.meta.url).href,
    tech: ["Python", "NumPy", "Seaborn", "Plotly"],
  },

  project7: {
    name: "Multi-Machine Chatroom",
    description: "Using Java sockets and threads, I created a ChatRoom that was accessable on multiple machines. Some of the features include personalized text colors, 6 or more users, and under 100ms latency.",
    link: "https://github.com/DevionRosa/Multi-Machine-Console-Chatroom",
    img: new URL("../assets/ChatRoomimg.png", import.meta.url).href,
    tech: ["Java", "Socket Programming", "Multi-threading"],
  },

  project8: {
    name: "Flappy Bird",
    description: "A python application replicating the famous Flappy Bird game. Consisted of an interactive menu, live score counter, saved high scores, and Flappy Bird game logic.",
    link: "https://github.com/DevionRosa/Flappy-Bird",
    img: new URL("../assets/FlappyBirdimg.png", import.meta.url).href,
    tech: ["Python", "Pygame"],
  }
};

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-6 p-4 flex flex-col items-center">
      {Object.keys(projects).map((key) => (
        <div 
          key={key} 
          className="p-6 bg-purple-900/20 border border-purple-800/50 rounded-xl shadow w-full lg:w-3/4 mx-auto flex flex-col md:flex-row gap-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:-translate-y-1 transition-all duration-300"
        >
          
          {/* 1. LEFT SIDE: Image */}
          <div className="flex-shrink-0 flex justify-center">
            <img
              src={projects[key].img}
              alt={projects[key].name}
              className="w-40 h-40 border-2 border-purple-500 rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* 2. MIDDLE: Text Content */}
          <div className="flex flex-col flex-grow min-w-0">
            <h2 className="text-2xl font-bold text-white">{projects[key].name}</h2>
            <p className="mt-2 text-gray-300 text-sm md:text-base line-clamp-3 md:line-clamp-none">
              {projects[key].description}
            </p>
            
            <div className="mt-6 md:mt-auto pt-6">
              <a
                href={projects[key].link}
                className="inline-block px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 hover:shadow-lg transition-all duration-200"
              >
                View Project
              </a>
            </div>
          </div>

          {/* 3. RIGHT SIDE: Tech Stack Section */}
          <div className="flex-shrink-0 w-full md:w-32 lg:w-40 border-t md:border-t-0 md:border-l border-purple-800 pt-4 md:pt-0 md:pl-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 text-center md:text-left">
              Tech Stack
            </h3>
            <div className="flex flex-wrap md:flex-col gap-2 justify-center md:justify-start">
              {/* Assuming your projects object has a 'tech' array */}
              {projects[key].tech?.map((techName: string) => (
                <span 
                  key={techName}
                  className="px-2 py-1 bg-purple-950 border border-purple-500/30 text-purple-200 text-xs rounded font-mono text-center"
                >
                  {techName}
                </span>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProjectList;