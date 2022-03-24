import './styles.css';
import ROUTES from "../../constants/routes";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useMemo} from "react";

const Navbar = () => {
  const {pathname} = useLocation();
  const [searchParams] = useSearchParams();
  const team = searchParams.get('team');

  const title = useMemo(() => {
    switch (pathname) {
      case ROUTES.MEMBERS:
        if (team) {
          return 'Team Detail';
        } else {
          return 'Members';
        }

      case ROUTES.TEAMS:
        return 'Teams';

      case ROUTES.TODOS:
        return 'Todos';

      default:
        return 'List Demo';
    }
  }, [pathname, team]);

  return (
    <header>
      <div className="dv-navbar flex">
        {/* title */}
        <h4>{title}</h4>

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
