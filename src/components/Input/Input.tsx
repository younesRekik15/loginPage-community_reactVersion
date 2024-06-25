import "./Input.css";

interface Promp {
  type: string;
  placeholder: string;
}

const input = ({ type, placeholder }: Promp) => {
  return (
    <label htmlFor={type} className="input">
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <input type={type} id={type} placeholder={placeholder} />
    </label>
  );
};

export default input;
