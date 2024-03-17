import React from 'react';
import './MainPage.css'
import logo from '../../assets/logo/logo.png'
import search from '../../assets/icons/search.svg'
import mypage from '../../assets/icons/mypage.svg'
import next from '../../assets/icons/next.svg'
import like from '../../assets/icons/like.svg'
import location from '../../assets/icons/location.svg'
import level from '../../assets/icons/level.svg'

function MainPage() {
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

          <div className='recipePhoto'>
            <div className='photoStyle'> 
              <img src={like} alt='like' />
              <span> 카레 </span> 
            </div>

            <div className='photoStyle'> 
              <img src={like} alt='like' />
              <span> 까르보나라 </span> 
            </div>
          
            <div className='photoStyle'> 
              <img src={like} alt='like' />
              <span> 불닭볶음면 </span> 
            </div>
          </div>
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
