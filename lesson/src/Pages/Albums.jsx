export const Albums = (props) => {
  return (
    <div className="albums">
      <h2>Albums</h2>
      {props.albums.map((el) => {
        return (
          <ul key={el.id}>
            <li ><span>Title: </span> {el.title}</li>
          </ul>
        );
      })}
    </div>
  );
};
