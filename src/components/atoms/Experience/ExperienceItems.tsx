import { Children } from "react";

type Props = {
  histories: {
    title: string;
    startDate: string;
    languages: string;
  }[];
};

export const ExperienceItems = (props: Props) => {
  return (
    <>
      {Children.toArray(
        props.histories.map((history) => {
          return (
            <div className="experience-item-container">
              <h3 className="experience-item-title">{history.title}</h3>
              <p className="experience-item-term">{history.startDate}</p>
              <p className="experience-item-languages-text">
                Languages, flameworks and others that I have used here.
              </p>
              <p className="experience-item-languages">
                {history.languages}...etc
              </p>
            </div>
          );
        })
      )}
    </>
  );
};
