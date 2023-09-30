import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";

const TodoItem = ({ todo, onDelete, onComplete, isCompleted }) => {
  return (
    <div className={isCompleted ? "todoItem completed" : "todoItem"}>
      <span>{todo.text}</span>
      <div id="todoBtns">
        {isCompleted ? (
          <AiOutlineCheck />
        ) : (
          <>
            <button className="delete" onClick={() => onDelete(todo.id)}>
              <AiFillDelete />
            </button>
            <button onClick={() => onComplete(todo.id)}>
              <AiOutlineCheck />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
