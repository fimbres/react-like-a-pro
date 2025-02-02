import { NavLink, Route, Routes } from "react-router-dom";

import { routes } from "../../../routes/Routes";
import { Suspense } from "react";

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>
        <ul>
          {routes.map(route => (
            <li key={route.label}>
              <NavLink to={route.path} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.label}</NavLink>
            </li>
          ))}
        </ul>
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} Component={route.Component} />
            ))}
          </Routes>
        </Suspense>
    </div>
  )
}

export default LazyLayout;
