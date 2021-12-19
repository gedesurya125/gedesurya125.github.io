import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import "./App.css";
import DrawerContainer from "./components/drawer/DrawerContainer";
import Project from "./pages/Project";

function App() {
  type PageRouter = {
    exact: boolean;
    path: string;
    component: React.FunctionComponent;
  }[];

  const pageRouter: PageRouter = [
    {
      exact: true,
      path: "/",
      component: () => <Home/>,
    },
    {
      exact: true,
      path: "/contact",
      component: Contact,
    },
    {
      exact: true,
      path: "/about",
      component: About,
    },
    {
      exact: true,
      path: "/skills",
      component: Skills,
    },
    {
      exact: true,
      path: "/project",
      component: () => <Project/>
    }
  ];

  return (
    <div className="App flex bg-gray-900">
      <Router>
        <DrawerContainer />
        <Switch>
          {pageRouter.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
