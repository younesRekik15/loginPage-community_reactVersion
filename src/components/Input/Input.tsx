import "./Input.css";

interface Promp {
  type: string;
  label: string;
  placeholder: string;
  width?: {};
}

const input = ({ type, label, placeholder, width = { width: "388px" } }: Promp) => {
  return (
    <label htmlFor={type} className="input" style={width}>
      <p>{label}</p>
      <input type={type} id={type} placeholder={placeholder} />
    </label>
  );
};

export default input;
