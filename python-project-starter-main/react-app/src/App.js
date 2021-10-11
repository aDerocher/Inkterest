import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar_Splash from './components/NavBar_Splash';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import NewInkForm from './components/NewInk';
import User from './components/User';
import { authenticate } from './store/session';
import LogoutButton from './components/auth/LogoutButton'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    {user && <NavBar />}
    {user === null && <NavBar_Splash />}
      
      <LogoutButton />
      <Switch>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/inks/new-ink' exact={true} >
          <NewInkForm />
        </ProtectedRoute>
        <ProtectedRoute path='/inks' exact={true}>
          <h1>inks page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
