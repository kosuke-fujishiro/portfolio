import { Icons } from "../icon/Icons";

export const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer>
      <div className="link-container">
        <Icons />
      </div>
      <p className="copyright">&copy; {year} - Kosuke Fujishiro.</p>
    </footer>
  );
};
