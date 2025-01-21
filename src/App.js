import "./styles.css";

const { useState, useEffect } = React;
const { Routes, Route, NavLink, useNavigate } = ReactRouterDOM;

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // useNavigate を使用

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
      navigate("/");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <nav>
        {/* "All" をアクティブにするために `end` 属性を使用 */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/completed"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Completed
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/incomplete"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Incomplete
        </NavLink>
      </nav>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>

      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} toggleTask={toggleTask} />}
        />
        <Route
          path="/completed"
          element={
            <TaskList
              tasks={tasks.filter((task) => task.completed)}
              toggleTask={toggleTask}
            />
          }
        />
        <Route
          path="/incomplete"
          element={
            <TaskList
              tasks={tasks.filter((task) => !task.completed)}
              toggleTask={toggleTask}
            />
          }
        />
      </Routes>
    </div>
  );
}

const TaskList = ({ tasks, toggleTask }) => (
  <ul>
    {tasks.map((task) => (
      <li
        key={task.id}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {task.text}
      </li>
    ))}
  </ul>
);
