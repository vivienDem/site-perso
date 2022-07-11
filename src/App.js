import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cookies from 'universal-cookie';
import ukLogo from './assets/uk.svg';
import Project from './pages/Projects';


export default class App extends React.Component {

  constructor() {
    super();
    this.cookies = new Cookies();
    this.cookies.set('lang', "fr", { path: '/' });
    this.cookies.set('langLogo', ukLogo, { path: '/' });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home cookies={this.cookies} />} />
          <Route path="/contact" element={<Contact cookies={this.cookies} />} />
          <Route path="/projects" element={<Project cookies={this.cookies} />} />
        </Routes>
      </BrowserRouter>
    )
  }

}



