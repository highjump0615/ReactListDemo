import "./styles.css"
import _ from 'lodash';

/**
 * Learned properties from FlatList component on React Native
 */


const DataList = ({listHeaderComponent, emptyComponent, data, renderItem}) => {
  return (
    <table className="tb-list">
      <thead>
      {listHeaderComponent}
      </thead>

      <tbody>
      {_.isEmpty(data) ? (
        emptyComponent
      ) : (
        data.map((item, index) => renderItem({item, index}))
      )}
      </tbody>
    </table>
  );
};

export default DataList;
