
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
// import User from "./components/User";
import NavBar from "./components/NavBar";
// import LoginForm from "./components/auth/LoginForm";
import UsersList from "./components/UsersList";
import SignUpForm from "./components/auth/SignUpForm";
import NewInkForm from "./components/NewInk";
// import LogoutButton from "./components/auth/LogoutButton";
import NewCanvasForm from './components/NewCanvas';
import NavBarSplash from "./components/NavBarSplash";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProfilePage from "./components/ProfilePage";
import PinBuilder from "./components/PinBuilder";
import EditInkForm from "./components/EditInkForm"
import DiscoverInks from "./components/DiscoverInks";
import About from "./components/About";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
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
      {user === null && <NavBarSplash />}

      <Switch>
        <Route path="/" exact={true}>
            {user && <DiscoverInks />}
            {user === null && <h1>Welcome to Inkterest!</h1>}

        </Route>

        {/* <Route path="/profile-page" exact={true}>
            <ProfilePage />
        </Route> */}

        <Route path='/pin-builder' exact={true}>
          <PinBuilder />
        </Route>

        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route> */}

        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path="/inks/new-ink" exact={true}>
          <NewInkForm />
        </ProtectedRoute>

        <ProtectedRoute path="/inks/:inkId/edit" exact={true}>
          <EditInkForm />
        </ProtectedRoute>

        <ProtectedRoute path='/canvases/new-canvas' exact={true} >
          <NewCanvasForm />
        </ProtectedRoute>

        <ProtectedRoute path='/inks' exact={true}>
          <DiscoverInks />
        </ProtectedRoute>

        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path="/users/:userId" exact={true}>
            <ProfilePage />
        </ProtectedRoute>
        
        <Route path="/about" exact={true}>
            <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
