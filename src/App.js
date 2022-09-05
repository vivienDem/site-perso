import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cookies from "universal-cookie";
import Project from "./pages/Projects";
import CV from "./pages/CV";
import Background from "./components/Background";

const background = <Background />

export default class App extends React.Component {
  constructor() {
    super();
    this.cookies = new Cookies();
    this.cookies.set("lang", "fr", { path: "/" });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home cookies={this.cookies} background={background} />} />
          <Route path="/cv" element={<CV cookies={this.cookies} background={background} />} />
          <Route path="/contact" element={<Contact cookies={this.cookies} background={background} />} />
          <Route
            path="/projects"
            element={<Project cookies={this.cookies}
              background={background} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
