import SocialButton from "./components/SocialButton/SocialButton";
import MainButton from "./components/MainButton/MainButton";
import Input from "./components/Input/Input";

const App = () => {
  return (
    <div className="container">
      <div className="img-part"></div>
      <div className="login-part">
        <div className="flex-space-item"></div>
        <main>
          <header>
            <h1>Welcome Back 👋</h1>
            <p>
              Today is a new day. It's your day. You shape it. <br />
              Sign in to start managing your projects.
            </p>
          </header>
          <form action="" method="POST">
            <Input type="email" placeholder="Example@email.com"></Input>
            <Input type="password" placeholder="At least 8 characters"></Input>
            <a>Forgot Password?</a>
            <MainButton>sign in</MainButton>
          </form>
          <div className="social-buttons-container">
            <SocialButton brandName="Facebook"></SocialButton>
            <SocialButton brandName="Google"></SocialButton>
          </div>
          <p>
            Don't you have an account? <a href="">Sign up</a>
          </p>
        </main>
        <p className="copyright not-small-screen-only">
          &copy; 2023 ALL RIGHTS RESERVED
        </p>
      </div>
      <p className="copyright small-screen-only">
        &copy; 2023 ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default App;
