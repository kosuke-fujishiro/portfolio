import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

export const Icons = () => {
  return (
    <>
      <a href="https://twitter.com/KFWebDev" target="_blank" rel="noreferrer">
        <IconButton>
          <TwitterIcon color="primary" fontSize="large" />
        </IconButton>
      </a>
      <a
        href="https://github.com/kosuke-fujishiro"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <GitHubIcon color="primary" fontSize="large" />
        </IconButton>
      </a>
    </>
  );
};
