import { FilterTodo, InputTodo } from "./inputBoxComponents";

export const InputBox = ({setFilterUser, loadTodoList}) => {
  return (
    <div className="inputBox">
      <InputTodo loadTodoList={loadTodoList}/>
      <FilterTodo setFilterUser={setFilterUser}/>
    </div>
  )
}
