import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Receiver } from "./components/Reciever";
import { Sender } from "./components/Sender";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Receiver />} path="/receiver" />
          <Route element={<Sender />} path="/sender" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
