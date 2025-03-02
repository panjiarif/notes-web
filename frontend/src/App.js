import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Dashboard from "./components/Dashboard.js";
import Navbar from "./components/Navbar.js";
// import NoteList from "./components/NoteList.js";
import AddNote from "./components/AddNote.js";
import EditNote from "./components/EditNote.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <div>
            <Navbar />
            <Dashboard />
            {/* <NoteList /> */}
          </div>
          } />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </Router>
  );
}

export default App;
