import logo from "./logo.svg";
import "./App.css";
import SearchPanel from "./SearchPanel";
import Github from "./Github";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route path="/" element={<SearchPanel />}></Route>
          <Route path="/github" element={<Github />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
