import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/mainpage/main";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login/log";
import List from "./components/listCard/list";
import Convertion from "./components/converter/convert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/convert" element={<Convertion />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <List /> */}
     
    </>
  );
}

export default App;
