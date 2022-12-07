import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import EmployeesPage from "./pages/employeesPage";

function App() {
  return (
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/employees" element={<EmployeesPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
