import { useEffect } from "react";

let isLoadwidgets = false;

export const Tweet = () => {
  useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);

  return (
    <div className="tweet-container">
      <h2 className="tweet-title">Tweets</h2>
      <a
        className="twitter-timeline tweet-timeline"
        data-width="600"
        data-height="600"
        data-chrome="noheadernofooternoborders"
        href="https://twitter.com/KFWebDeveloper?ref_src=twsrc%5Etfw"
      >
        A Twitter List by Kosuke Fujishiro
      </a>
    </div>
  );
};
