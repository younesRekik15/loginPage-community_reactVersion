import SocialButton from "./components/SocialButton/SocialButton";
import MainButton from "./components/MainButton/MainButton";
import Input from "./components/Input/Input";
import { useState } from "react";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="container">
      <div className="img-part"></div>
      <div className="login-part">
        <div className="flex-space-item"></div>
        <main className="login-main">
          {isSignIn ? (
            <header className="login-header">
              <h1>Welcome Back 👋</h1>
              <p>
                Today is a new day. It's your day. You shape it. <br />
                Sign in to start managing your projects.
              </p>
            </header>
          ) : (
            <header className="login-header">
              <h1>Create Your Account</h1>
              <p>
                Join us today! Fill in the details below to get started and
                manage your projects effortlessly.
              </p>
            </header>
          )}
          <form action="" method="POST">
            {!isSignIn ? (
              <Input
                type="text"
                label="Full Name:"
                placeholder="Enter your full name"
                width={{ width: "100%" }}
              ></Input>
            ) : (
              <></>
            )}
            <Input
              type="text"
              label="Email:"
              placeholder="Enter your email address"
              width={{ width: "100%" }}
            ></Input>
            <Input
              type="password"
              label="Password:"
              placeholder={
                (isSignIn ? "Enter" : "Create") +
                " your password (at least 8 characters)"
              }
              width={{ width: "100%" }}
            ></Input>

            {isSignIn ? (
              <></>
            ) : (
              <Input
                type="password"
                label="Confirm Password:"
                placeholder="Confirm your password"
                width={{ width: "100%" }}
              ></Input>
            )}

            {isSignIn ? (
              <a className="forgot-password">Forgot Password?</a>
            ) : (
              <></>
            )}
            <MainButton width={{ width: "100%" }}>
              {isSignIn ? "sign in" : "sign up"}
            </MainButton>
          </form>
          <div className="or-form">
            <div className="or-container">
              <span className="or">
                <span>Or</span>
                {isSignIn ? (
                  <span className="small-screen-only"> sign in with</span>
                ) : (
                  <span className="small-screen-only"> sign up with</span>
                )}
              </span>
            </div>
            <div className="social-buttons-container">
              <SocialButton
                brandName="Google"
                registrationType={isSignIn ? "sign in" : "sign up"}
                width={{ width: "100%" }}
              ></SocialButton>
              <SocialButton
                brandName="Facebook"
                registrationType={isSignIn ? "sign in" : "sign up"}
                width={{ width: "100%" }}
              ></SocialButton>
            </div>
          </div>
          {isSignIn ? (
            <p className="sign-up">
              Don't you have an account? <a onClick={toggle}>Sign up</a>
            </p>
          ) : (
            <p className="sign-up">
              Already have an account? <a onClick={toggle}>Sign in</a>
            </p>
          )}
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

function SignUp() {
  return <></>;
}

export default App;
