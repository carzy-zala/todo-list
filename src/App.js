import React from "react";
import Todo from "./components/Todos";
import "./App.css";
import AddTodo from "./components/AddTodos";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
