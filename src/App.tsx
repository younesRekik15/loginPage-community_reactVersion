import SocialButton from "./components/SocialButton/SocialButton";
import MainButton from "./components/MainButton/MainButton";
import Input from "./components/Input/Input";

const App = () => {
  return (
    <div className="container">
      <div className="img-part"></div>
      <div className="login-part">
        <div className="flex-space-item"></div>
        <main className="login-main">
          <header className="login-header">
            <h1>Welcome Back 👋</h1>
            <p>
              Today is a new day. It's your day. You shape it. <br />
              Sign in to start managing your projects.
            </p>
          </header>
          <form action="" method="POST">
            <Input
              type="email"
              placeholder="Example@email.com"
              width={{ width: "100%" }}
            ></Input>
            <Input
              type="password"
              placeholder="At least 8 characters"
              width={{ width: "100%" }}
            ></Input>
            <a className="forgot-password">Forgot Password?</a>
            <MainButton width={{ width: "100%" }}>sign in</MainButton>
          </form>
          <div className="or-form">
            <div className="or-container">
              <span className="or">
                <span>Or</span>
                <span className="small-screen-only">sign in with</span>
              </span>
            </div>
            <div className="social-buttons-container">
              <SocialButton
                brandName="Google"
                width={{ width: "100%" }}
              ></SocialButton>
              <SocialButton
                brandName="Facebook"
                width={{ width: "100%" }}
              ></SocialButton>
            </div>
          </div>
          <p className="sign-up">
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
