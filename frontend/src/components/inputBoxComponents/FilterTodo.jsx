
export const FilterTodo = ({setFilterUser}) => {

  const filtros = ["Todos", "Completados", "Por hacer"];

  const onInputChange = ({target}) => {
    const selectedFilter = target.options[target.selectedIndex].value;
    setFilterUser(selectedFilter);
  }

  return (
    <div className="inputBox--filterTodo">
      <select name="tipoFiltro" onChange={onInputChange}>
      {
        filtros?.map(f => <option value={f} key={f}>{f}</option>)
      }
      </select>
    </div>
  )
}
