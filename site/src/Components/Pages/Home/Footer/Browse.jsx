import { NavLink } from "react-router-dom";

const Browse = () => {
  return (
    <div className="browse">
      <h4 className="browse-title title">Browse</h4>
      <ul className="browse-nav desc">
          <li className="browse-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="browse-link"
            >
              Home
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              exact
              to="/personale"
              activeClassName="active"
              className="browse-link"
            >
              Personale
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              exact
              to="/attivita"
              activeClassName="active"
              className="browse-link"
            >
              Attivita
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              exact
              to="/contattaci"
              activeClassName="active"
              className="browse-link"
            >
              Contattaci
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Browse