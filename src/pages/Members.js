import DataList from "../components/DataList/DataList";
import {members} from "../constants/dummy-data";

const Members = () => {

  const tableHeader = () => (
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Team</th>
    </tr>
  );

  const renderItem = ({item, index}) => (
    <tr key={`item-${index}`}>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.team.name}</td>
    </tr>
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
