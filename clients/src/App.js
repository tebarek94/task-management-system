import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTaskList from "./components/AddTaskList";
import ListAllTaskList from "./components/ListAllTaskList";
import UpdateTaskList from "./components/UpdeateTaskList";
import FillExample from "./components/FillExample";

function App() {
  return (
    <BrowserRouter>
      <FillExample />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<ListAllTaskList />} />
        <Route path="/add" element={<AddTaskList />} />
        <Route path="/update/:id" element={<UpdateTaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
