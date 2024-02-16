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
<div className="d-flex h-100">
<SideBar />
<MainScreen/>
</div>


    </BrowserRouter>
    </Provider>
  );
}

export default App;
