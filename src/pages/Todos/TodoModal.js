import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";

const TodoModal = ({title, data, onSave, ...props}) => {
  // states
  const [todo, setTodo] = useState();

  useEffect(() => {
    // init text field with default
    setTodo(data);
  }, [data])

  //
  // actions
  //
  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    onSave(todo);
  };

  //
  // render
  //
  return (
    <Modal {...props}>
      <h4>{title}</h4>

      <form className="flex-col fm-todo" onSubmit={onSubmit}>
        <textarea value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Input content here" required />

        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default TodoModal;
