import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { signUp } from "../../store/session";
import "../../styles/signup-modal.css";

const SignUpFormModal = (props) => {
    const [ showErrors, setShowErrors ] = useState(false)
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  //   const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const passwordChecker = (arg, password) => {
    let pwArr = password.split()
    let checker = {
        letters: 'abcdefghijklmnopqrstuvwxyz',
        specials: '!@#$%^&*()',
        integers: '1234567890',
    }
    switch(arg){
        case 'let':
            pwArr.forEach(char => {
                if(checker.letters.includes(char)) return true;
            })
            break;
        case 'int':
            pwArr.forEach(char => {
                if(checker.integers.includes(char)) return true;
            })
            break;
        case 'spec':
            pwArr.forEach(char => {
                if(checker.specials.includes(char)) return true;
            })
            break;
        default:
            console.log('Error: passwordChecker: argument not recognized')
            break;
    }
    return false
  }

  useEffect(() => {
    let newErrors = [];
    if (username.length < 4 || username.length > 14) {newErrors.push("Username must be between 4 and 14 characters")}
    if (first_name.length < 3) {newErrors.push("Name must be longer")}
    if (first_name.length > 25) {newErrors.push("First name can not exceed 25 characters")}
    if (last_name.length < 3) {newErrors.push("Last name must be longer")}
    if (last_name.length > 25) {newErrors.push("Last name can not exceed 25 characters")}
    if (email.length < 6) {newErrors.push("Email must be at least 6 characters")}
    if (!(email.includes('@') && email.includes('.'))) {newErrors.push("Invalid email address")}
    if (password.length < 8) {newErrors.push("Password must be at least 8 characters")}
    // ========= These work, but its clunky and makes testing harder. Comment in/Refactor later =======================
    // if (passwordChecker('let')) {newErrors.push("Password must contain at least 1 character a-z")}
    // if (passwordChecker('int')) {newErrors.push("Password must contain at least 1 number")}
    // if (passwordChecker('spec')) {newErrors.push("Password must contain at least 1 special character: !@#$%^&*()")}
    if (password !== repeatPassword) {newErrors.push("Passwords must match")}
    setErrors(newErrors)
},[username, email, first_name, last_name, password, repeatPassword])

    const handleSignUp = (e) => {
        e.preventDefault();
        setShowErrors(true)
        if(errors.length > 0){
            return
        }
        onSignUp()
    }

    const onSignUp = async () => {
        const data = await dispatch(
            signUp(username, email, first_name, last_name, password)
        );
        if (data) {
            setErrors(data);
        }
    };

  if (!props.show) {
    return null;
  }

  const handleLoginRedirect = (e) => {
    props.login(true);
    props.signup(false);
  };

  return (
    <div className="signup-modal" onClick={props.onClose}>
      <div
        className="signup-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        Welcome to Inkterest
        <p className="signup-greet">Find new ideas to tattoo</p>
        <form className="signup-form">
          <div className="signup-errors">
              { showErrors &&
                <>
                {errors.map((error, ind) => (
                    <div key={ind}>
                    <p class='signup-error'>· {error}</p>
                    </div>
                ))}
                </>
              }
          </div>
          <div>
            <input
              placeholder="Username"
              className="signup-username"
              type="text"
              name="username"
              onChange={e => setUsername(e.target.value)}
              value={username}
              required
            ></input>
          </div>
          <div>
            <input
              placeholder="E-mail"
              className="signup-email"
              type="text"
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            ></input>
          </div>
          <div className="fname-lname">
            <input
              placeholder="First name"
              className="signup-fname"
              type="text"
              name="first-name"
              onChange={(e) => setFirst_name(e.target.value)}
              value={first_name}
              required
            ></input>
            <input
              placeholder="Last name"
              className="signup-lname"
              type="text"
              name="last-name"
              onChange={(e) => setLast_name(e.target.value)}
              value={last_name}
              required
            ></input>
          </div>
          <div>
            <input
              placeholder="Password"
              className="signup-password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
          </div>
          <div>
            <input
              placeholder="Re-enter password"
              className="signup-r-password"
              type="password"
              name="repeat_password"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className="signup-btn-row">
            <div className="signup-redirect">
              Already a member?
              <span
                onClick={(e) => handleLoginRedirect(e)}
                className="signup-to-login"
              >
                {" "}
                Login
              </span>
            </div>
            <button disabled={showErrors && errors.length > 0} className="signup-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormModal;
