import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateList } from "./pages/CreateList";
import { List } from "./pages/List";
import { EditList } from "./pages/EditList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit-list" element={<EditList />} />
      </Routes>
    </>
  );
}

export default App;
