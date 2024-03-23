import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css';
import logo from '../../assets/logo/logo.png';
import search from '../../assets/icons/search.svg';
import mypage from '../../assets/icons/mypage.svg';
import next from '../../assets/icons/next.svg';
import plus from '../../assets/icons/plus.png';
import chef from '../../assets/icons/chef.png';
import cart from '../../assets/icons/cart.png';
import { ThrumnailRecipe } from '../../components/Recipe/ThrumnailRecipe';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../../components/Sign/Signup';
import { Header } from '../../components/Header/Header';

function MainPage() {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  // 회원가입 모달창
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  
  const [signinData, setSigninData] = useState(null);

  useEffect(() => {
    const storedSigninData = sessionStorage.getItem('signinData');
    if (!storedSigninData) {
      // 세션 스토리지에 저장된 값이 없는 경우에만 모달창
      setIsSignupModalOpen(true);
    } else {
      setSigninData(JSON.parse(storedSigninData));
    }
  }, []);

  const toggleDropup = () => {
    setDropdownVisible(!dropdownVisible);
  };




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
    {/* Signup 모달 */}
        {isSignupModalOpen && <Signup />}
        
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
      <div className='header-container'><Header />
      </div>

      <div className='main-body'>
        <div className='title'>
          <div className='recipe-text'>
            <div className='recipe-name'> 레시피 둘러보기 </div>
            <Link to='/explore' className='a'>
              <div className='more'> 더보기 <img src={next} alt='next' /> </div>
            </Link>
          </div>

          <ThrumnailRecipe data={data} />
        </div>

        <div className='gredient'>
          <div className='recipe-text'>
            <div className='grd-name'> 공구 중인 식품 </div>

            <Link to='/more-product' className='more-product-link-style' >
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

        <img src={plus} className='plus' onClick={toggleDropup} />
        {dropdownVisible && (
          <div className='dropup'>
            <Link to='/recipeReg' className='link-style'><img src={chef} alt='chef' /> 레시피 </Link>
            <Link to='/product-post' className='link-style' style={{ marginTop: '8px' }}><img src={cart} alt='cart' /> 공동구매 </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
