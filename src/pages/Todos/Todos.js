import {useState} from "react";
import DataList from "../../components/DataList/DataList";
import Modal from "../../components/Modal/Modal";
import "./styles.css"

const Todos = () => {
  // states
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(true);

  //
  // actions
  //

  //
  // render
  //
  const tableHeader = () => (
    <tr>
      <th>ID</th>
      <th>Todo</th>
      <th>Actions</th>
    </tr>
  );

  const tableEmpty = () => (
    <tr>
      <td colSpan={3} className="td-empty">No todos in the list</td>
    </tr>
  );

  const renderItem = ({item, index}) => (
    <tr key={`item-${index}`}>
      <td>{item.id}</td>
      <td>{item.id}</td>
    </tr>
  );

  return (
    <div className="dv-main">
      <button className="mb-1" onClick={() => setShowModal(true)}>Add New Todo</button>

      <DataList
        listHeaderComponent={tableHeader()}
        emptyComponent={tableEmpty()}
        renderItem={renderItem}
        data={todos}
      />

      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <h4>Add / Edit Todo</h4>

        <form className="flex-col fm-todo">
          <textarea placeholder="Input content here" />

          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default Todos;
