import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import logo from "../logo.svg"
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "../01-lazyload/router/routes";

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading</span> }>
      <Router>
        <div className="main-layout">
          <nav>
            <ul>
              <img src={ logo } alt="React Logo" />
              {
                routes.map(({path, name}) => (
                  <li key={ path }>
                    <NavLink 
                      to={path}
                    >
                        {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({path, Component}) => (
                <Route 
                  key={ path } 
                  path={ path } 
                  element={ <Component/> }
                />
              ))
            }

          <Route
              path="*"
              element={<Navigate to={routes[0].path} replace />}
          />
          </Routes>
        </div>
      </Router>
    </Suspense>
      
  );
}