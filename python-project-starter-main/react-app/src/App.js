import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import User from './components/User';
import NavBar from './components/NavBar';
import LoginForm from './components/auth/LoginForm';
import UsersList from './components/UsersList';
import SignUpForm from './components/auth/SignUpForm';
import NewInkForm from './components/NewInk';
import LogoutButton from './components/auth/LogoutButton'
import NewCanvasForm from './components/NewCanvas';
import NavBar_Splash from './components/NavBar_Splash';
import ProtectedRoute from './components/auth/ProtectedRoute';

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

      {/* <LogoutButton /> */}
      <Switch>
        <Route path='/' exact={true} >
          <h1>Splash Page!</h1>
        </Route>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route> */}
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/inks/new-ink' exact={true} >
          <NewInkForm />
        </ProtectedRoute>
        <ProtectedRoute path='/canvases/new-canvas' exact={true} >
          <NewCanvasForm />
        </ProtectedRoute>
        <ProtectedRoute path='/inks' exact={true}>
          <h1>Inks Page</h1>
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
