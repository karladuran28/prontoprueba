import { useForm } from "../../hooks";

export const InputTodo = () => {

  const {nuevoTodo, onInputChange, onResetForm} = useForm({nuevoTodo: ""})

  const onAddSubmit = (e) => {
    e.preventDefault();
    if(nuevoTodo.trim().length > 0) {
      console.log(nuevoTodo);
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
