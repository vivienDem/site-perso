import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cookies from 'universal-cookie';
import ukLogo from './assets/uk.svg';


const cookies = new Cookies();
if (cookies.get('lang') === '') {
  cookies.set('lang', "fr", { path: '/' });
  cookies.set('langLogo', ukLogo, { path: '/' });
}


export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home cookies={cookies} />} />
          <Route path="/contact" element={<Contact cookies={cookies} />} />
        </Routes>
      </BrowserRouter>
    )
  }

}



