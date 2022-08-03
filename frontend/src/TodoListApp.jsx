import { useState, useEffect } from "react"
import { AppTitle, InputBox, ResultsBox } from "./components"
import { getMethod } from "./helpers";

export const TodoListApp = () => {

  const [todoList, setTodoList] = useState([]);
  const [filterUser, setFilterUser] = useState("Todos");

  const loadTodoList = () => getMethod(setTodoList);

  useEffect(() => {
    loadTodoList();
    // eslint-disable-next-line
  }, [])

  return (
    // ------------------------------ NOTA ---------------------------------
    // Como el loadTodoList es utilizado por casi todos los componentes,
    // para otra versión se recomienda crear un UtilContext (useContext hook)
    // y colocar en este contexto esta función, para que los componentes
    // accedan directamente a través de este contexto y no por el traspaso de 
    // props.

    <div className="content">
      <AppTitle/>
      <InputBox 
        loadTodoList={loadTodoList} 
        setFilterUser={setFilterUser}
      />
      <ResultsBox 
        filterUser={filterUser}
        loadTodoList={loadTodoList}
        todoList={todoList} 
      />
    </div>
  )
}
