
export const ListTodoItem = ({todoText, removeTodo}) => {

  const onDone = () => {
    console.log("terminando tarea we");
  }

  const onDelete = () => {
    removeTodo(todoText);
  }

  return (
    <div className="listTodoItem">
      <div className="listTodoItem--textBox">
        {todoText}
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
