import logo from "../logo.svg";
import "./Login.css";
import google from "../img/google.svg";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
function Login() {
  return (
    <div className="login-div">
      <div className="login">
        <div className="logo-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="text-center">
          {" "}
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
        <div className="list">
          <ul>
            <li className="bold">
              Login
              <hr />
            </li>
            <li className="normal">Signup</li>
          </ul>
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Email Address"
            className="input-email"
          />
        </div>
        <br />
        <div className="password">
          <input
            type="password"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Password"
            className="input-password"
          />
        </div>

        <br />
        <div className="login-button">
          <button type="submit" className="button">
            LOGIN
          </button>
        </div>
        <br />
        <p className="text-left">Forgot Password?</p>
        <p className="text-gray">or login with</p>
        <div className="social-icon">
          <img src={google} className="google" alt="google icon" />
          <img src={facebook} className="facebook" alt="facebook icon" />
          <img src={twitter} className="twitter" alt="twitter icon" />
        </div>
        <div className="footer-text">
          <p>
            Don't have an Account?<span>Create new One!</span>
          </p>
          <p>
            By signing up, you are agree with our{" "}
            <span>
              <u>Tearm & Conditions</u>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
