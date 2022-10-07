import TodoListItem from "./TodoListItem";

function TodoList({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((listItem) => (
        <TodoListItem todoList={todoList} setTodoList={setTodoList} listItem={listItem} key={listItem.id} />
      ))}
    </div>
  );
}

export default TodoList;
