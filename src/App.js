import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const CV = lazy(() => import('./pages/CV'));
const Project = lazy(() => import('./pages/Projects'));
const Background = lazy(() => import("./components/Background"))

const withSuspense = (component) => {
  return <Suspense fallback={<div>...</div>}>
    {component}
  </Suspense>
}


export default class App extends React.Component {
  constructor() {
    super();
    this.cookies = new Cookies();
    this.cookies.set("lang", "fr", { path: "/" });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={withSuspense(<Home cookies={this.cookies} />)} />
            <Route path="/cv" element={withSuspense(<CV cookies={this.cookies} />)} />
            <Route path="/contact" element={withSuspense(<Contact cookies={this.cookies} />)} />
            <Route
              path="/projects"
              element={withSuspense(<Project cookies={this.cookies}
              />)}
            />
          </Routes>

        </BrowserRouter>

        <Suspense fallback={<div className="loading-background" />} >
          {<Background />}
        </Suspense>
      </div>
    );
  }
}
