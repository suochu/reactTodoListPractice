//資料驅動畫面
/* eslint-disable react/prop-types */
import { MdCheck, MdDeleteOutline } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
const Todo = ({ todos, setTodos, text, todo }) => {
  const completeTodo = () => {
    console.log("completeTodo");
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  const deleteTodo = () => {
    console.log(
      "test:",
      todos.filter((el) => el.id !== todo.id)
    );
    //篩選出我點選之外的內容，然後再塞回state todo
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      {/*由state值判斷去改動態css*/}

      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeTodo}>
        <MdCheck />
      </button>
      <button className="trash-btn" onClick={deleteTodo}>
        <MdDeleteOutline />
      </button>
    </div>
  );
};

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos?.map((todo) => (
          <Todo
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
          />
        ))}

        {/*
        {todos?.map((todo) => {
          return( <Todo
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
          />;)
         
        })}
       
       */}
      </div>
    </div>
  );
};

export default TodoList;
