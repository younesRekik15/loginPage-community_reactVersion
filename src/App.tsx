import SocialButton from "./components/SocialButton/SocialButton";
import MainButton from "./components/MainButton/MainButton";

const App = () => {
  return (
    <>
      <SocialButton brandName="Facebook"></SocialButton>
      <SocialButton brandName="Google"></SocialButton>

      <MainButton>sign in</MainButton>

      <h1>hello world!</h1>
    </>
  );
};

export default App;
