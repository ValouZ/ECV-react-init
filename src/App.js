import "./App.css";
// import Example1 from "./components/examples/Example1";
// import Example2 from "./components/examples/Example2";
// import Example3 from "./components/examples/Example3";
// import Example4 from "./components/examples/Example4";
import ApiExample from "./components/examples/ApiExample";
import Header from "./components/layout/Header";
import Todo from "./components/todo-list/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ApiExample /> */}
      <Todo />
    </div>
  );
}

export default App;
