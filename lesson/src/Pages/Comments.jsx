export const Comments = (props) => {
  return (
    <div className="comments">
      <h2>Comments</h2>
      {props.comments.map((el) => {
        return (
          <ul key={el.id}>
            <li>
              <span>Name: </span>
              {el.name}
            </li>
            <li>
              <span>Email: </span> {el.email}
            </li>
            <li>
              <span>Body: </span> {el.body}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
