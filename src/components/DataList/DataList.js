import "./styles.css"

/**
 * Learned properties from FlatList component on React Native
 */


const DataList = ({listHeaderComponent, data, renderItem}) => {
  return (
    <table className="tb-list">
      <thead>
      {listHeaderComponent}
      </thead>

      <tbody>
      {data.map((item, index) => renderItem({item, index}))}
      </tbody>
    </table>
  );
};

export default DataList;
