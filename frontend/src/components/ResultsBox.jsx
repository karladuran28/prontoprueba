import { useState } from "react"
import { ListTodoItem } from "./resultsBoxComponents"

export const ResultsBox = () => {

  const [listTodos, setlistTodos] = useState(["Learn React", "Learn React Native", "Start with Hooks"])

  const removeTodo = (todo) => {
    setlistTodos(prev => prev.filter(t => t !== todo))
  }

  return (
    <div className="resultsBox">
      <div className="resultsBox--list">
        {
          listTodos.map(todo => 
            <ListTodoItem 
              todoText={todo} 
              key={todo}
              removeTodo={removeTodo}
            />)
        }
      </div>
    </div>
  )
}
