import DataList from "../components/DataList/DataList";
import {members} from "../constants/dummy-data";
import {useMediaQuery} from "react-responsive";
import {Link, useSearchParams} from "react-router-dom";
import {useMemo} from "react";
import ROUTES from "../constants/routes";


const Members = () => {
  const isDesktop = useMediaQuery({ minWidth: 640 });
  const [searchParams] = useSearchParams();
  const team = searchParams.get('team');

  const items = useMemo(() => {
    if (team) {
      return members.filter((m) => m.team.id === Number(team));
    }

    return members;
  }, [team]);

  //
  // render
  //
  const tableEmpty = () => (
    <tr>
      <td colSpan={100} className="td-empty">No members in this team</td>
    </tr>
  );

  const tableHeader = () => (
    isDesktop ? (
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Team</th>
      </tr>
    ) : (
      <tr>
        <th>ID</th>
        <th>Member</th>
      </tr>
    )
  );

  const renderItem = ({item, index}) => (
    isDesktop ? (
      <tr key={`item-${index}`}>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td><Link to={{pathname: ROUTES.MEMBERS, search: `?team=${item.team.id}`}}>{item.team.name}</Link></td>
      </tr>
    ) : (
      <tr key={`item-${index}`}>
        <td>{item.id}</td>
        <td>
          First Name: {item.first_name}<br />
          Last Name: {item.last_name}<br />
          Email: {item.email}<br />
          Team: <Link to={{pathname: ROUTES.MEMBERS, search: `?team=${item.team.id}`}}>{item.team.name}</Link>
        </td>
      </tr>
    )
  );

  return (
    <div className="dv-main">
      <DataList
        listHeaderComponent={tableHeader()}
        emptyComponent={tableEmpty()}
        renderItem={renderItem}
        data={items}
      />
    </div>
  );
};

export default Members;
