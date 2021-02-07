import "../css/index.css";
import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList";
import store from "./TodoStore";
import SampleComponent from "./Sample";

const app = document.getElementById("app");

ReactDOM.render(<SampleComponent store={store} />, app);
