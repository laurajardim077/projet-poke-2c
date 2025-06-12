import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand" to="/home">PokeApp</NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pokeflex" className="nav-link" activeClassName="active">
              PokeFlex
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pokegrid" className="nav-link" activeClassName="active">
              PokeGrid
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
