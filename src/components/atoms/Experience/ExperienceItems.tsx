import { Children } from "react";

type Props = {
  experiences: {
    title: string;
    terms: string;
    languages: string;
  }[];
};

export const ExperienceItems = (props: Props) => {
  return (
    <>
      {Children.toArray(
        props.experiences.map((experience) => {
          return (
            <div className="experience-item-container">
              <h3 className="experience-item-title">{experience.title}</h3>
              <p className="experience-item-term">{experience.terms}</p>
              <p className="experience-item-languages-text">
                Languages, flameworks and others that I have used here.
              </p>
              <p className="experience-item-languages">
                {experience.languages}...etc
              </p>
            </div>
          );
        })
      )}
    </>
  );
};
