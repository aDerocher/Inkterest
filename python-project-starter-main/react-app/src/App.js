
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import SignUpForm from "./components/auth/SignUpForm";
import NewInkForm from "./components/NewInk";
// import LogoutButton from "./components/auth/LogoutButton";
import NewCanvasForm from './components/NewCanvas';
import NavBarSplash from "./components/NavBarSplash";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProfilePage from "./components/ProfilePage";

import DiscoverInks from "./components/DiscoverInks";
import About from "./components/About";
import ProfileEdit from './components/ProfileEdit'
import SplashPage from "./components/SplashPage";
import DiscoverInksTwo from "./components/DiscoverInksTwo"
import InkToCanvasForm from "./components/TestPage";
import InkPage from "./components/InkPage";
import CanvasEdit from "./components/CanvasEdit"
import "./styles/index.css"
import CanvasProfilePage from "./components/CanvasProfilePage";


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
      {user ? <NavBar /> : <NavBarSplash />}

      <Switch>

        <Route path="/" exact={true}>
            {user ? <DiscoverInks /> : <SplashPage />}
        </Route>

        <Route path="/users/:userId" exact={true}>
          <ProfilePage />
        </Route>

        <Route path='/inks' exact={true}>
          <DiscoverInks />
        </Route>

        <Route path="/inks/:inkId" exact={true}>
          <InkPage />
        </Route>

        <Route path="/about" exact={true}>
          <About />
        </Route>

        {/* TEST ROUTES -- TEMP */}

        <Route path='/test' exact={true}>
            <InkToCanvasForm />
        </Route>

        <Route path="/discover-inks-two" exact={true}>
          <DiscoverInksTwo />
        </Route>

        {/* TEST ROUTES -- TEMP */}

        <ProtectedRoute path="/inks/new-ink" exact={true}>
            <NewInkForm />
        </ProtectedRoute>

        <Route path="/inks/:inkId" exact={true}>
          <InkPage />
        </Route>

        <ProtectedRoute path='/canvases/:canvas_id' exact={true} >
            <CanvasProfilePage />
        </ProtectedRoute>

        <ProtectedRoute path='/canvases/new-canvas' exact={true} >
            <NewCanvasForm />
        </ProtectedRoute>

        <ProtectedRoute path='/canvases/:canvas_id/edit-canvas' exact={true} >
            <CanvasEdit />
        </ProtectedRoute>

        <ProtectedRoute path='/profile-edit' exact={true}>
          <ProfileEdit />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
