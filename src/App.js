import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import LayOut from "./components/layOut";
import Product from "./components/product";
import WelcomePage from "./components/welcomePage";
import User from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/users" element={<User />} />
          {/* <Route path="/" element={<WelcomePage />} /> */}
          {/* <Route path="/" element={<WelcomePage />} /> */}
        </Route>
        <Route path="/logout" element={<SignUp />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
