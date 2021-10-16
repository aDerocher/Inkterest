import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../styles/signup-modal.css'

const SignUpFormModal = (props) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
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

  return (
    <div className = "signup-modal" onClick = { props.onClose } >
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        Sign up
        <form className='signup-form' onSubmit={onSignUp}>
          <div className='signup-errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input
              placeholder='username'
              className='signup-username'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <input
              placeholder='email'
              className='signup-email'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              placeholder='password'
              className='signup-password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              placeholder='re-enter password'
              className='signup-r-password'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className='signup-btn-row'>
            <div className='signup-redirect'>Already a member? Login</div>
            <button className='signup-btn' type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormModal;
