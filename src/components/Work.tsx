import { useState } from "react";

interface Work {
  company: string,
  position: string,
  dates: string,
  description: string[],
  logo: string,
}

const works: { [key: string]: Work } = {
    work1:{
        company: "Walmart",
        position: "Software Engineer Intern",
        dates: "Jun. 2026 - Aug. 2026",
        description: ["Expanded an agent to cover 100% of the dataset, improving depth while reducing redundant processing", 
                      "Developed an evaluation framework to benchmark agent quality across reasoning, tool execution, latency, and token efficiency, enabling repeatable release gates and data-driven model selection"],
        logo: new URL("../assets/walmart_logo.jpg", import.meta.url).href,
    },

    work2:{
        company: "Sponsors For Educational Opportunity",
        position: "Tech Developer Intern",
        dates: "Jun. 2025 - Aug. 2025",
        description: ["Engaged in SCRUM-like teams to design, test, and implement full-stack applications using Flask, MySQL, Firebase, React, Tailwind, and API integrations",
                      "Led the back-end development of a representative tracker that uses Congress’s API to educate users on local officials",
                      "Utilized full-stack development to create an AI-powered app designed to limit food waste by creating personalized meals"],
        logo: new URL("../assets/seo_logo.png", import.meta.url).href,
    },
};

const Experience = () => {
  const [selectedKey, setSelectedKey] = useState<string>(Object.keys(works)[0]);
  const activeWork = works[selectedKey];

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-10 min-h-screen">
      
      {/* LEFT SIDEBAR: Item Cards */}
      <div className="flex flex-col gap-4 md:w-[350px]">
        {Object.keys(works).map((key) => {
          const isSelected = selectedKey === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedKey(key)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border border-purple-800/50
                hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:-translate-y-1 transition-all duration-300 
                ${isSelected 
                    ? "!bg-purple-900/20 shadow-lg shadow-[0_0_20px_rgba(168,85,247,0.2)]" 
                    : ""
                }`}
            >
              {/* Logo Circle */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img src={works[key].logo} alt={works[key].company} className="w-17 h-17 object-contain" />
              </div>

              {/* Text Info */}
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">{works[key].position}</h4>
                <p className="text-slate-400 text-sm">{works[key].company}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* RIGHT SIDE: Detail Panel */}
      <div className="flex-1 bg-purple-900/20 border border-white/5 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">{activeWork.position}</h2>
        <p className="text-slate-400 text-xl mb-6">{activeWork.company}</p>
        
        <p className="text-slate-500 font-medium mb-8">{activeWork.dates}</p>

        <ul className="list-disc list-outside ml-5 space-y-4">
          {activeWork.description.map((point, i) => (
            <li key={i} className="text-slate-200 text-lg pl-2">
              {point}
            </li>
          ))}
        </ul> 
      </div>
    </div>
  );
};

export default Experience;