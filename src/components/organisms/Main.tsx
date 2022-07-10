import ScrollRevealContainer from "../atoms/ScrollRevealContainer";

export const Main = () => {
  return (
    <div className="main-container">
      <h1 className="main-title up-text-animation">
        <span>K</span>
        <span>o</span>
        <span>s</span>
        <span>u</span>
        <span>k</span>
        <span>e</span>
        <span>&nbsp;</span>
        <span>F</span>
        <span>u</span>
        <span>j</span>
        <span>i</span>
        <span>s</span>
        <span>h</span>
        <span>i</span>
        <span>r</span>
        <span>o</span>
      </h1>
      <ScrollRevealContainer>
        <p className="main-text">I am a software engineer working in Tokyo.</p>
      </ScrollRevealContainer>
    </div>
  );
};
