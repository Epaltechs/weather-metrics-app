import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home/home';
import Detail from './Pages/Detail/detail';
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f1354fda8bec32646187c58f25f48372`;
