import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <div>
      <div>
        {todos.map(
          (todo) =>
            !todo.completed && (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onComplete={onComplete}
                isCompleted={false}
              />
            )
        )}
      </div>

      <div>
        <hr />
        {todos.map(
          (todo) =>
            todo.completed && (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onComplete={onComplete}
                isCompleted={true}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TodoList;
