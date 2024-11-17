import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
