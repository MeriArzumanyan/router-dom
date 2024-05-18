import st from "./Header.module.css";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className={st.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/albums">Albums</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>
    </header>
  );
};
