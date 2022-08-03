import { AppTitle, InputBox, ResultsBox } from "./components"

export const TodoListApp = () => {
  return (
    <div className="content">
      <AppTitle/>
      <InputBox/>
      <ResultsBox/>
    </div>
  )
}
