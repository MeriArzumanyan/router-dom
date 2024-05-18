import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Comments } from "./Pages/Comments";
import { Photos } from "./Pages/Photos";
import { Albums } from "./Pages/Albums";
import { Todos } from "./Pages/Todos";
import { Posts } from "./Pages/Posts";
import { Header } from "./Components/Header/Header";
import { NotFound } from "./Components/NotFound";
function App(props) {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums albums={props.albums} />} />
          <Route
            path="/comments"
            element={<Comments comments={props.comments} />}
          />
          <Route path="/photos" element={<Photos photos={props.photos} />} />
          <Route path="/posts" element={<Posts posts={props.posts} />} />
          <Route path="/todos" element={<Todos todos={props.todos} />} />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
