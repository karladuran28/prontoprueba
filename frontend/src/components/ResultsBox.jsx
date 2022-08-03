import { ListTodoItem } from "./resultsBoxComponents"

export const ResultsBox = ({todoList, filterUser, loadTodoList}) => {

  return (
    <div className="resultsBox">
      <div className="resultsBox--list">
        { filterUser === "Todos" &&
          todoList.map(todo => 
            <ListTodoItem todo={todo} key={todo.id} loadTodoList={loadTodoList}/>)
        }
        {
          filterUser === "Completados" &&
          todoList.map(todo => todo.isCompleted &&
            <ListTodoItem todo={todo} key={todo.id} loadTodoList={loadTodoList}/>)
        }
        {
          filterUser === "Por hacer" &&
          todoList.map(todo => !todo.isCompleted &&
            <ListTodoItem todo={todo} key={todo.id} loadTodoList={loadTodoList}/>)
        }
      </div>
    </div>
  )
}
