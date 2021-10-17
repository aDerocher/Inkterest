import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../../styles/login-modal.css'

const LoginFormModal = (props) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  if (!props.show) {
    return null;
  }

  const handleLoginRedirect = (e) => {
    props.login(false)
    props.signup(true)
  }

  return (
    <div className="login-modal" onClick={props.onClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        Welcome back!
        <form className='login-form' onSubmit={onLogin}>
            <div className='login-errors'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <input
                className='login-email'
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <input
                className='login-password'
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
            </div>
            <div className='login-btn-row'>

              <div className='signup-redirect'>
                Need an account?
                <span onClick={(e) => handleLoginRedirect(e)} className='signup-to-login'> Sign up</span>
              </div>
                <button className='login-btn' type='submit'>Login</button>
            </div>
          </form>
      </div>
    </div>


  );
};

export default LoginFormModal;
