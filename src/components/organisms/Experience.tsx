import { ExperienceItems } from "../atoms/Experience/ExperienceItems";
import ScrollRevealContainer from "../atoms/ScrollRevealContainer";

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
      <div className="experience-wrapper">
        <ScrollRevealContainer>
          <>
            <h2 className="experience-title">Professional Experience</h2>
            <ExperienceItems experiences={experiences} />
          </>
        </ScrollRevealContainer>
      </div>
    </div>
  );
};
