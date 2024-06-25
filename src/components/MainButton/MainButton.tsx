import "./MainButton.css";

interface Promp {
  children: string;
  width?: {};
}

const MainButton = ({ children, width={'width':'388px'} }: Promp) => {
  return <button className="main-button" style={width}>{children}</button>;
};

export default MainButton;
