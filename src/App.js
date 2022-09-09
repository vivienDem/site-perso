import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cookies from "universal-cookie";
import Project from "./pages/Projects";
import CV from "./pages/CV";
import Background from "./components/Background";

export default class App extends React.Component {
  constructor() {
    super();
    this.cookies = new Cookies();
    this.cookies.set("lang", "fr", { path: "/" });
    this.background = <Background />
    this.state = {
      componentDidMount: false
    }
  }

  componentDidMount() {
    this.setState({ componentDidMount: true });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home cookies={this.cookies} />} />
            <Route path="/cv" element={<CV cookies={this.cookies} />} />
            <Route path="/contact" element={<Contact cookies={this.cookies} />} />
            <Route
              path="/projects"
              element={<Project cookies={this.cookies}
              />}
            />
          </Routes>
        </BrowserRouter>
        {
          //Loading the animated background after the first rendering to make the page load faster
          this.state.componentDidMount && this.background
        }
      </div>
    );
  }
}
