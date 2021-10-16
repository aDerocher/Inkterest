import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../styles/signup-modal.css'

const SignUpFormModal = (props) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(
        username,
        email,
        first_name,
        last_name,
        password
      ));

      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };


  if (!props.show) {
    return null;
  }

  const handleLoginRedirect = (e) => {
    props.login(true)
    props.signup(false)
  }

  return (
    <div className = "signup-modal" onClick = { props.onClose } >
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        Welcome to Inkterest
        <p className='signup-greet'>Find new ideas to tattoo</p>
        <form className='signup-form' onSubmit={onSignUp}>
          <div className='signup-errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input
              placeholder='Username'
              className='signup-username'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <input
              placeholder='E-mail'
              className='signup-email'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='fname-lname'>
            <input
              placeholder='First name'
              className='signup-fname'
              type='text'
              name='first-name'
              onChange={(e) => setFirst_name(e.target.value)}
              value={first_name}
            ></input>
            <input
              placeholder='Last name'
              className='signup-lname'
              type='text'
              name='last-name'
              onChange={(e) => setLast_name(e.target.value)}
              value={last_name}
            ></input>
          </div>
          <div>
            <input
              placeholder='Password'
              className='signup-password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              placeholder='Re-enter password'
              className='signup-r-password'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className='signup-btn-row'>
            <div className='signup-redirect'>
              Already a member?
              <span onClick={(e) => handleLoginRedirect(e)} className='signup-to-login'> Login</span>
            </div>
            <button className='signup-btn' type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormModal;
