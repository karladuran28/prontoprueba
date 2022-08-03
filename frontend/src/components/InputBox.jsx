import { FilterTodo, InputTodo } from "./inputBoxComponents";

export const InputBox = () => {
  return (
    <div className="inputBox">
      <InputTodo/>
      <FilterTodo/>
    </div>
  )
}
