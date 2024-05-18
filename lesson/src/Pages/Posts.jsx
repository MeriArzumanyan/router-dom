export const Posts = (props) => {
  return (
    <div className="posts">
      <h2>Posts</h2>

      {props.posts.map((el) => {
        return (
          <ul key={el.id}>
            <li>
              <span>Title: </span>
              {el.title}
            </li>
            <li>
              <span>Body: </span>
              {el.body}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
