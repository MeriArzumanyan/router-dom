export const Todos = (props) => {
  return (
    <div className="todos">
      <h2>Todos</h2>
      {props.todos.map((el) => {
        return (
          <ul key={el.id}>
            <li>
              <span>Title: </span>
              {el.title}
            </li>
            <li>
              <span>{el.completed ? "Completed" : "Not completed"} </span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
