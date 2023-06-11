//functional component
import { BiMessageSquareAdd } from "react-icons/bi";
import PropTypes from "prop-types";

//form.jsx input值更新 到 app.jsx中的state state在回傳給 <input value={inputText} />
//onChange input值改變就會促發 並傳遞event
//父元件傳遞
const Form = ({ inputText, setInputText, todos, setTodos, setTab }) => {
  Form.propTypes = {
    inputText: PropTypes.string.isRequired,
    setInputText: PropTypes.func.isRequired,
  };

  //js
  //目標將使用者輸入的值 儲存到State
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    //props.setInputText(event.target.value);
    setInputText(event.target.value);
  };
  const handleSelect = (event) => {
    console.log(event.target.value);
    setTab(event.target.value);
  };

  const submitTodo = (event) => {
    //阻止表單送出,避免瀏覽器重整
    event.preventDefault();

    setTodos([
      //state原有的陣列物件
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 999,
      },
    ]);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button type="submit" className="todo-button" onClick={submitTodo}>
        <BiMessageSquareAdd />
      </button>
      <div className="select">
        <select name="todos" onChange={handleSelect}>
          <option value="all">全部</option>
          <option value="completed">已完成</option>
          <option value="uncompleted">待完成</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
