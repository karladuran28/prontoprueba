import { deleteMethod, patchMethod } from "../../helpers";

export const ListTodoItem = ({todo, loadTodoList}) => {

  const {isCompleted} = todo;

  const onDone = () => {
    if (!isCompleted) {
      const data = {isCompleted: true};
      patchMethod(todo.id, data, loadTodoList);
    }
  }

  const onDelete = () => deleteMethod(todo.id, loadTodoList);

  return (
    <div className={isCompleted 
                    ? "listTodoItem completed" 
                    : "animate__animated animate__fadeIn listTodoItem"}
    >
      <div className={isCompleted ? "listTodoItem--textBox crossedLine" : "listTodoItem--textBox"}>
        {todo.descripcion}
      </div>
      <div className="listTodoItem--btnBox">
        <button
          className="listTodoItem--btn btn--green"
          onClick={onDone}
        >
          <span className="material-symbols-rounded icon-sm">done</span>
        </button>
        <button
          className="listTodoItem--btn btn--orange"
          onClick={onDelete}
        >
          <span className="material-symbols-rounded icon-sm">delete</span>
        </button>
      </div>
    </div>
  )
}
