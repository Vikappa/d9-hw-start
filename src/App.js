import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import MainScreen from "./components/MainScreen";

function App() {
  return ( 
    <Provider store={store}>
    <BrowserRouter>
<div className="Container">
<div className="Row">
<SideBar />
<Routes>
<Route path="/" element={<MainScreen/>} />
<Route path="/podcast" element={<MainScreen/>} />
</Routes>
</div>
</div>


    </BrowserRouter>
    </Provider>
  );
}

export default App;
