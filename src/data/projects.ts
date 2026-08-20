export interface Project {
  name: string;
  description: string;
  link: string;
  img: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: 'Stardew Bot',
    description:
      "A voice-activated assistant for Stardew Valley that passively listens until a wake-word is detected, then captures the user's question via speech-to-text, queries Ollama for an answer, and speaks the response back through text-to-speech — all routed through the system's microphone and speakers.",
    link: 'https://github.com/DevionRosa/StardewBot',
    img: new URL('../assets/StardewBotimg.png', import.meta.url).href,
    tech: ['Python', 'OpenWakeWord', 'Vosk', 'pyttsx3', 'PyAudio', 'Ollama']
  },
  {
    name: 'Bite Buddy',
    description:
      'BiteBuddy is an AI-powered nutrition planner that reduces food waste by generating personalized recipe ideas from ingredients you already have. It also creates customized meal plans based on your mood, dietary needs, and preferences. I worked as a full-stack developer for this project, optimizing Gemini responses using prompt engineering, and designing interactive and appealing components.',
    link: 'https://github.com/mustafa-nom/BiteBuddy',
    img: new URL('../assets/BiteBuddyimg.png', import.meta.url).href,
    tech: ['React', 'FireBase', 'Tailwind CSS', 'Gemini API', 'Spoonacular API']
  },
  {
    name: 'Representative Tracker',
    description:
      'This project allows users to find their local congressional representatives, analyze voting records/statements, & generate AI-based summaries using Google Gemini. My main role was a backend developer where I focused on fetching legislation and adding it to the database to speed up time.',
    link: 'https://github.com/mustafa-nom/RepTracker',
    img: new URL('../assets/RepTrackerimg.png', import.meta.url).href,
    tech: ['Python', 'Flask', 'SQLite', 'Gemini API', 'React', 'Congress API']
  },
  {
    name: 'YouTube Anti-Recommender',
    description:
      "This project calls the YouTube API to extract metadata from a video using its URL, and generates antonyms using Google Gemini's API, and then searches YouTube using these new tags to come up with anti-recommendations. My work mainly consisted of fetching metadata and prompt engineering Gemini. We plan to make this a Chrome Extension.",
    link: 'https://github.com/DevionRosa/YouTubeAntiRecommender',
    img: new URL('../assets/YouTubeRecimg.png', import.meta.url).href,
    tech: ['YouTube API', 'Gemini API', 'Python', 'SQLite']
  },
  {
    name: 'Discord Chat Bot',
    description:
      'When playing unfamiliar or familiar games scouring the wiki to look for specific items takes too much time out of your gameplay. To combat this I developed a discord bot that utilizes web scraping and natural language processing (NLP) to cut down on the time spent viewing the wiki, while also getting the information you need to have a successful playthrough.',
    link: 'https://github.com/DevionRosa/Discord-Bot',
    img: new URL('../assets/DiscordBotimg.png', import.meta.url).href,
    tech: ['Python', 'NextCord', 'BeautifulSoup', 'Sentence Transformer', 'Numpy', 'Pickle']
  },
  {
    name: 'NFL Concussions Analysis',
    description:
      'Conducted exploratory data analysis (EDA) to visualize trends in NFL concussions and also developed predictive models to assess concussion likelihood and forcast recovery timelines.',
    link: 'https://github.com/DevionRosa/Concussion-Injuries',
    img: new URL('../assets/NFLConcussionsimg.png', import.meta.url).href,
    tech: ['Python', 'Pandas', 'Matplotlib', 'Scikit-Learn']
  },
  {
    name: 'Voter Registration Analysis',
    description:
      'Applied time-series and comparative analysis to assess voter spikes, informing historical context and trend forecasting. Also, created geographic visualizations to illustrate regional disparities and highlight population-driven registration patterns.',
    link: 'https://github.com/DevionRosa/VotersDataAnalysis',
    img: new URL('../assets/VoterAnalysisimg.png', import.meta.url).href,
    tech: ['Python', 'NumPy', 'Seaborn', 'Plotly']
  },
  {
    name: 'Multi-Machine Chatroom',
    description:
      'Using Java sockets and threads, I created a ChatRoom that was accessable on multiple machines. Some of the features include personalized text colors, 6 or more users, and under 100ms latency.',
    link: 'https://github.com/DevionRosa/Multi-Machine-Console-Chatroom',
    img: new URL('../assets/ChatRoomimg.png', import.meta.url).href,
    tech: ['Java', 'Socket Programming', 'Multi-threading']
  },
  {
    name: 'Flappy Bird',
    description:
      'A python application replicating the famous Flappy Bird game. Consisted of an interactive menu, live score counter, saved high scores, and Flappy Bird game logic.',
    link: 'https://github.com/DevionRosa/Flappy-Bird',
    img: new URL('../assets/FlappyBirdimg.png', import.meta.url).href,
    tech: ['Python', 'Pygame']
  }
];
