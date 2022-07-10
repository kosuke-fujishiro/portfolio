import { ExperienceItems } from "../atoms/Experience/ExperienceItems";

const histories = [
  {
    title: "Software Engineer at Gunosy,Inc.",
    startDate: "May 2022 - current",
    languages: "JavaScript / TypeScript React.js",
  },
  {
    title: "Software Engineer at MDP,Inc.",
    startDate: "March 2020 - May 2022",
    languages:
      "PHP / Laravel / CakePHP JavaScript React.js Vue.js HTML5 CSS3 SCSS AWS",
  },
];

export const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Professional Experience</h2>
      <ExperienceItems histories={histories}></ExperienceItems>
    </div>
  );
};