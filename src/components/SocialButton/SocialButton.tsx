import "./SocialButton.css";

interface Promp {
  brandName: string;
  registrationType: string;
  brandLink?: string;
  width?: {};
}

const SocialButton = ({ brandName, registrationType,width = { width: "359px" } }: Promp) => {
  return (
    <button className="social-button" style={width}>
      <img
        className="icon"
        src={"/src/components/assets/icons/" + brandName + ".svg"}
      />
      <span className="not-small-screen-only">{registrationType} with</span>{" "}
      <span className="social-button-name">{brandName}</span>
    </button>
  );
};

export default SocialButton;
