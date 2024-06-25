import "./SocialButton.css";

interface Promp {
  brandName: string;
  brandLink?: string;
}

const SocialButton = ({ brandName }: Promp) => {
  return (
    <button className="social-button">
      <img className="icon" src={"src/assets/icons/" + brandName + ".svg"} />
      <span className="not-small-screen-only">sign in with</span> <span className="social-button-name">{brandName}</span>
    </button>
  );
};

export default SocialButton;
