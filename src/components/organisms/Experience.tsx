import { ExperienceItems } from "../atoms/Experience/ExperienceItems";

const experiences = [
  {
    title: "Software Engineer at Gunosy,Inc.",
    terms: "May 2022 - current",
    languages: "JavaScript / TypeScript React.js",
  },
  {
    title: "Software Engineer at MDP,Inc.",
    terms: "March 2020 - May 2022",
    languages:
      "PHP / Laravel / CakePHP JavaScript React.js Vue.js HTML5 CSS3 SCSS AWS",
  },
];

export const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Professional Experience</h2>
      <ExperienceItems experiences={experiences} />
    </div>
  );
};
