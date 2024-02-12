import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/storeFavList';
import Nvbar from "./components/Nvbar";

function App() {
  return ( 
    <Provider store={store}>

    <BrowserRouter>
    <Nvbar/>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
