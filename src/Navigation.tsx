import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import LogoImg from './assets/react.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={LogoImg} alt='logo' width={60} style={{ marginTop: 40 }} />
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' Component={() => <h1>Home</h1>} />
          <Route path='/about' Component={() => <h1>About</h1>} />
          <Route path='/users' Component={() => <h1>Users</h1>} />
          <Route path='/*' Component={() => <h1>Oops!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
