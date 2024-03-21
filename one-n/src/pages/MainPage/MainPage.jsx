import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css'
import logo from '../../assets/logo/logo.png'
import search from '../../assets/icons/search.svg'
import mypage from '../../assets/icons/mypage.svg'
import next from '../../assets/icons/next.svg'
import like from '../../assets/icons/like.svg'
import location from '../../assets/icons/location.svg'
import level from '../../assets/icons/level.svg'
import { ThrumnailRecipe } from '../../components/Recipe/ThrumnailRecipe';

function MainPage() {

  const [data, setData] = useState([]);

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

  return (
    <div>
      <div className='header-icon'>
        <img src={logo} alt='logo' class='logo-img' />

        <div className='right-header' >
          <img src = {search} alt='search' />
          <img src = {mypage} alt='mypage' />
        </div>

      </div>
      
      <div className='main-body'>

        <div className='title'>
          <div className='recipe-text'>
            <div className='recipe-name'> 레시피 둘러보기 </div>
            <div className='more'> 더보기 <img src={next} alt='next'/> </div>
          </div>
          
          <ThrumnailRecipe data={data} />
        </div>

        <div className='gredient'>
          <div className='recipe-text'>
            <div className='grd-name'> 지금 핫한 식품 </div>
            <div className='more'> 더보기 <img src={next} alt='next'/> </div>
          </div>

        {/* 추후 컴포넌트로 변경 */}
        <div className='saleGrd'>
          <div className='grd-img' />
          
          <div>
            <div className='sell-title'>
              카레 재료 공동구매합니다 <img src={like} alt='like' />
            </div>
            
            <div className='seller' >  
            윤준영 
            <div className='level'> 
              <span> 만족도 </span>
              <span> 89% </span>
              <div> <img src={level} alt='level'/>  </div>              
            </div>
            </div>

            <div className='location'> <img src={location} alt='location'/>  218m </div>
          </div>
        </div>

        <div className='tags'>
          <div> 카레가루 </div>
          <div> 감자 </div>
          <div> 양파 </div>
          <div> 당근 </div>
          <div> + 4개 </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default MainPage;
