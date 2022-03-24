import './styles.css';
import ROUTES from "../../constants/routes";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="dv-navbar flex">
        {/* title */}
        <h4>Teams</h4>

        {/* nav items */}
        <div className="dv-nav-items flex">
          <Link to={ROUTES.TEAMS}>Teams</Link>
          <Link to={ROUTES.MEMBERS}>Members</Link>
          <Link to={ROUTES.TODOS}>Todos</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
