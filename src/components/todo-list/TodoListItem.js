import { Button } from "react-bootstrap";

function TodoListItem({ todoList, setTodoList, listItem }) {
  const deleteTodoItem = () => {
    setTodoList(todoList.filter((item) => item.id !== listItem.id));
  };

  return (
    <div className="todo-item">
      <h5>{listItem.name}</h5>
      <Button variant="danger" onClick={deleteTodoItem}>
        Done
      </Button>
    </div>
  );
}

export default TodoListItem;
