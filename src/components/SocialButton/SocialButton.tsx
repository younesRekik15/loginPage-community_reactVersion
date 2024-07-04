import "./SocialButton.css";

interface Promp {
  brandName: string;
  registrationType: string;
  brandLink: string;
  width?: {};
}

const SocialButton = ({ brandName, registrationType, brandLink, width = { width: "359px" } }: Promp) => {
  return (
    <button className="social-button" style={width}>
      <img
        className="icon"
        src={ brandLink }
      />
      <span className="not-small-screen-only">{registrationType} with</span>{" "}
      <span className="social-button-name">{brandName}</span>
    </button>
  );
};

export default SocialButton;
