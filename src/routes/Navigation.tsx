import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { routes } from './Routes';
import LogoImg from '/react.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={LogoImg} alt='logo' width={60} style={{ marginTop: 40 }} />
          <ul>
            {routes.map(route => (
              <li key={route.label}>
                <NavLink to={route.path} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} Component={route.Component} />
            ))}
            <Route path='/*' Component={() => <h1>Oops!</h1>} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
