import SocialButton from "./components/SocialButton/SocialButton";
import MainButton from "./components/MainButton/MainButton";
import Input from "./components/Input/Input";

const App = () => {
  return (
    <>
      <SocialButton brandName="Facebook"></SocialButton>
      <SocialButton brandName="Google"></SocialButton>

      <MainButton>sign in</MainButton>

      <Input type="email" placeholder="Example@email.com" ></Input>
      <Input type="password" placeholder="At least 8 characters" ></Input>

      <h1>hello world!</h1>
    </>
  );
};

export default App;
