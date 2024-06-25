import "./Input.css";

interface Promp {
  type: string;
  placeholder: string;
  width?: {};
}

const input = ({ type, placeholder, width={"width":"388px"} }: Promp) => {
  return (
    <label htmlFor={type} className="input" style={width}>
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <input type={type} id={type} placeholder={placeholder} />
    </label>
  );
};

export default input;
