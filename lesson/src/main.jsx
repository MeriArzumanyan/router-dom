import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { albums } from "./jb.js";
import { comments } from "./jb.js";
import { photos } from "./jb.js";
import { posts } from "./jb.js";
import { todos } from "./jb.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App
      albums={albums}
      comments={comments}
      photos={photos}
      posts={posts}
      todos={todos}
    />
  </BrowserRouter>
);
