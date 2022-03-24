import {useState} from "react";
import DataList from "../../components/DataList/DataList";
import "./styles.css"
import TodoModal from "./TodoModal";
import _ from 'lodash';

const Todos = () => {
  // states
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  //
  // actions
  //
  const onEditTodo = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const onSaveTodo = (todo) => {
    if (currentIndex < 0) {
      // add new
      setTodos([...todos, todo]);
    } else {
      // update
      const todosCopy = _.clone(todos);
      todosCopy[currentIndex] = todo;
      setTodos(todosCopy);
    }

    // close modal
    setShowModal(false);
  };

  const onRemove = (index) => {
    // remove
    const todosCopy = _.clone(todos);
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };

  //
  // render
  //
  const tableHeader = () => (
    <tr>
      <th width={30}>ID</th>
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
      <td>{index + 1}</td>
      <td>{item}</td>
      <td className="td-action">
          <button className="mr-1" onClick={() => onEditTodo(index)}>Edit</button>
          <button onClick={() => onRemove(index)}>Delete</button>
      </td>
    </tr>
  );

  return (
    <div className="dv-main">
      <button
        className="mb-1"
        onClick={() => {
          setCurrentIndex(-1);
          setShowModal(true);
        }}>
        Add New Todo
      </button>

      <DataList
        listHeaderComponent={tableHeader()}
        emptyComponent={tableEmpty()}
        renderItem={renderItem}
        data={todos}
      />

      {/* modal for add / update item */}
      <TodoModal
        visible={showModal}
        title={currentIndex >= 0 ? 'Update Todo' : 'Add New Todo'}
        data={currentIndex >= 0 ? todos[currentIndex] : undefined}
        onClose={() => setShowModal(false)}
        onSave={onSaveTodo}
      />
    </div>
  );
};

export default Todos;
