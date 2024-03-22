import React from 'react';
import { NavBar } from './components/NavBar/NavBar'
import Map from './pages/Map/Map';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ReProductDetail from './pages/ReProductDetail/ReProductDetail';
import SelectLocation from './components/SelectLocation/SelectLocation';
import ProductPost from './pages/ProductPost/ProductPost';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SearchAddress from './components/SearchAddress/SearchAddress';
import Scrap from './pages/Scrap/Scrap';
import { MyContextProvider } from './components/MyContextProvider/MyContextProvider';
import TemporaryHome from './pages/TemporaryHome/TemporaryHome';
import ChatList from './pages/ChatList/ChatList';
import MainPage from './pages/MainPage/MainPage';
import Explore from './pages/Explore/Explore';
import SearchPage from './pages/SearchPage/SearchPage';
import MoreProductPage from './pages/MoreProductPage/MoreProductPage';
import CheckLocationPage from './pages/CheckLocationPage/CheckLocationPage';


function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <div className="App">

          <Routes>
            <Route path="/product-detail/:productId" element={<ProductDetail />} />
            <Route path="/reproduct-detail/:productId" element={<ReProductDetail />} />
            <Route path="/map" element={<Map />} />
            <Route path="/search-address" element={<SearchAddress />} />
            <Route path="/select-location" element={<SelectLocation />} />
            <Route path='/product-post' element={<ProductPost />} />
            <Route path="/scrap" element={<Scrap />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/chat" element={<ChatList/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/more-product' element={<MoreProductPage/>}/>
            <Route path='/check-location' element={<CheckLocationPage/>}/>
          </Routes>

        </div>
      </MyContextProvider>
    </BrowserRouter >

  );
}

export default App;
