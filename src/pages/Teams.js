import {teams} from "../constants/dummy-data";
import DataList from "../components/DataList/DataList";

const Teams = () => {
  const tableHeader = () => (
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Member Count</th>
    </tr>
  );

  const renderItem = ({item, index}) => (
    <tr key={`item-${index}`}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.member_count}</td>
    </tr>
  );

  return (
    <div className="dv-main">
      <DataList
        listHeaderComponent={tableHeader()}
        renderItem={renderItem}
        data={teams}
      />
    </div>
  );
};

export default Teams;
