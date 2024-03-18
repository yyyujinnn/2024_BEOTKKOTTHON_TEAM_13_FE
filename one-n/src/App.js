import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import Map from './pages/Map/Map';
import ProductDetail from './pages/ProductDetail.jsx/ProductDetail';
import ReProductDetail from './pages/ReProductDetail/ReProductDetail';
import SelectLocation from './components/SelectLocation/SelectLocation';
import ProductPost from './pages/ProductPost/ProductPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAddress from './components/SearchAddress/SearchAddress';
import { MyContextProvider } from './components/MyContextProvider/MyContextProvider';


function App() {
  return (
    <MyContextProvider>
      <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ProductPost />} />
        <Route path="/search-address" element={<SearchAddress />} />
        <Route path="/select-location" element={<SelectLocation />} />
        <Route path='/product-post' element={<ProductPost/>}/>
      </Routes>
    </Router>
    </div>
    </MyContextProvider>
    
  );
}

export default App;
