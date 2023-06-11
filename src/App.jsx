import { useEffect, useState } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  //當前變數inputText,改變變數函式setInputText ""初始值
  const [inputText, setInputText] = useState("");
  //待辦事項設在父元件上 物件陣列
  const [todos, setTodos] = useState([
    { text: "寫作業", completed: false, id: 1 },
    { text: "看電影", completed: false, id: 2 },
    { text: "睡覺", completed: false, id: 3 },
  ]);

  const [tab, setTab] = useState("all");

  //欲篩選過的代辦事項
  const [filterTodos, setFilterTodos] = useState([]);

  const handleFilter = () => {
    switch (tab) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  //告訴react tab、todos資料變了就去促發handleFilter
  useEffect(() => {
    handleFilter();
  }, [tab, todos]);

  return (
    <div className="App">
      {/* 在這裡加入註解 */}
      <div className="container">
        <header>TodoList</header>

        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setTab={setTab}
        />

        <TodoList todos={filterTodos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
