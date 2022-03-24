import DataList from "../components/DataList/DataList";
import {members} from "../constants/dummy-data";
import {useMediaQuery} from "react-responsive";

const Members = () => {
  const isDesktop = useMediaQuery({ minWidth: 640 });

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
        <td>{item.team.name}</td>
      </tr>
    ) : (
      <tr key={`item-${index}`}>
        <td>{item.id}</td>
        <td>
          First Name: {item.first_name}<br />
          Last Name: {item.last_name}<br />
          Email: {item.email}<br />
          Team: {item.team.name}
        </td>
      </tr>
    )
  );

  return (
    <div className="dv-main">
      <DataList
        listHeaderComponent={tableHeader()}
        renderItem={renderItem}
        data={members}
      />
    </div>
  );
};

export default Members;
