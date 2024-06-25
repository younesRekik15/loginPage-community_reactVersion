import { Children } from "react";
import "./MainButton.css";

interface Promp {
  children: string;
}

const MainButton = ({ children }: Promp) => {
  return <button className="main-button">{children}</button>;
};

export default MainButton;
