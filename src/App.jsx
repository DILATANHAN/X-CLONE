import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from './pages/Feed';

const App = () => {
  return (  <BrowserRouter>
<Routes>
  <Route path="/" element= {<Login/>} />
  <Route path="/feed" element= {<Feed/>} />

</Routes>
  </BrowserRouter>
 );
};

export default App;
