
import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css"
import 'animate.css';

import 'aos/dist/aos.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
  );
}

export default App;
