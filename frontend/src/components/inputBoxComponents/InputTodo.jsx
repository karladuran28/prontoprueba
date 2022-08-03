import { postMethod } from "../../helpers";
import { useForm } from "../../hooks";

export const InputTodo = ({loadTodoList}) => {

  const {nuevoTodo, onInputChange, onResetForm} = useForm({nuevoTodo: ""})

  const addTodo = () => {
    const data = {descripcion: nuevoTodo};
    postMethod(data, loadTodoList);
  }

  const onAddSubmit = (e) => {
    e.preventDefault();
    if(nuevoTodo.trim().length > 0) {
      addTodo();
      onResetForm();
    }
  }

  return (
    <div className="inputBox--inputTodo">
      <form onSubmit={onAddSubmit} className="inputBox--inputTodo--form">
        <input 
          type="text"
          placeholder="Añadir nuevo Todo"
          className="form--inputTodo--input"
          name="nuevoTodo"
          value={nuevoTodo}
          onChange={onInputChange}
        />
        <button
          className="form--inputTodo--addBtn" 
          type="submit"
        >
          <span className="material-symbols-rounded">add</span>
        </button>
      </form>
    </div>
  )
}
