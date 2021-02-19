import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/Home";
import CourseDetailScreen from "./Screens/Detail";
import SignUpScreen from "./Screens/SignUp";
import Header from "./Layout/Header";
import SignInScreen from "./Screens/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail/:courseId" exact component={CourseDetailScreen} />
        <Route path="/signup" exact component={SignUpScreen} />
        <Route path="/signin" exact component={SignInScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
