export const Photos = (props) => {
  return (
    <div className="photos">
      <h2>Photos</h2>
      {props.photos.map((el) => {
        return (
          <ul key={el.id}>
            <li>
              <span>Title: </span>
              {el.title}
            </li>
            <img src={el.url} alt="" />
            <br />
            <img src={el.thumbnailUrl} alt="" />
          </ul>
        );
      })}
    </div>
  );
};
