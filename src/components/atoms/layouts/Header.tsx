import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link className="header-logo" to="/">
        <h1 className="header-title">KF</h1>
      </Link>
    </header>
  );
};
