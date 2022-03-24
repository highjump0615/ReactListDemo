import Navbar from "../components/Navbar/Navbar";
import {Switch, Route, Link, Routes, Redirect, Navigate} from "react-router-dom";
import ROUTES from "../constants/routes";
import Members from "./Members";
import Todos from "./Todos/Todos";
import Teams from "./Teams";

const Layout = () => {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path={ROUTES.TEAMS} element={<Teams />} />
        <Route path={ROUTES.MEMBERS} element={<Members />} />
        <Route path={ROUTES.TODOS} element={<Todos />} />

        {/* default to teams page for other links */}
        <Route path="*" element={<Navigate replace to={ROUTES.TEAMS} />} />
      </Routes>
    </div>
  );
};

export default Layout;
