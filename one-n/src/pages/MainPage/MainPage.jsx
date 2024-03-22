import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css';
import logo from '../../assets/logo/logo.png';
import search from '../../assets/icons/search.svg';
import mypage from '../../assets/icons/mypage.svg';
import next from '../../assets/icons/next.svg';
import like from '../../assets/icons/like.svg';
import location from '../../assets/icons/location.svg';
import level from '../../assets/icons/level.svg';
import { ThrumnailRecipe } from '../../components/Recipe/ThrumnailRecipe';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import { NavBar } from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';

function MainPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API 엔드포인트 URL 설정
    const apiUrl = 'http://20.39.188.154:8080/recipe/brief';

    axios.get(apiUrl)
      .then((response) => {
        const updatedData = response.data.map(item => ({
          ...item,
          thumbnail_image: `http://20.39.188.154${item.thumbnail_image}`
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });
  }, []);

  const getFetchData = () => {
    console.log("요청을 보냈습니다");
    const url = `http://20.39.188.154:8080/post/list?type=all&bcode=&keyword=&page=${page}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((product) => setProducts((prev) => [...prev, ...product]));
  };

  useEffect(() => getFetchData(), [page]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    console.log("실행됨");
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    console.log(scrollTop);
    console.log(clientHeight);
    console.log(scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("스크롤 끝");
      setPage((prev) => prev + 1);
    }
  };



  return (
    <div className='mainpage-container'>
      <div className='header-icon'>
        <img src={logo} alt='logo' className='logo-img' />

        <div className='right-header' >
          <Link to='/search'>
            <img src={search} alt='search' />
          </Link>
          <Link to='/scrap'>
            <img src={mypage} alt='mypage' />
          </Link>
        </div>
      </div>

      <div className='main-body'>
        <div className='title'>
          <div className='recipe-text'>
            <div className='recipe-name'> 레시피 둘러보기 </div>
            <div className='more'> 더보기 <img src={next} alt='next' /> </div>
          </div>

          <ThrumnailRecipe data={data} />
        </div>

        <div className='gredient'>
          <div className='recipe-text'>
            <div className='grd-name'> 공구 중인 식품 </div>
            <Link to='/more-product' className='link-style' >
              <div className='more'> 더보기 <img src={next} alt='next' /> </div>
            </Link>
          </div>

          <div className='sale-gredient-container'>
            {products.length > 0 && (
              products.map((product, index) => (
                <SaleProduct key={index} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default MainPage;
