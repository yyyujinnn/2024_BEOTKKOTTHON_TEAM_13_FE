import React from 'react';
import './MainPage.css'
import search from '../../assets/icons/search.svg'
import mypage from '../../assets/icons/mypage.svg'
import next from '../../assets/icons/next.svg'
import like from '../../assets/icons/like.svg'
import location from '../../assets/icons/location.svg'
import level from '../../assets/icons/level.svg'

function MainPage() {
  return (
    <div>
      <div className='header'>
        {/* 로고 */}
        <div className='right-header' >
          <img src = {search} alt='search' />
          <img src = {mypage} alt='mypage' />
        </div>
      </div>

      <div className='recommendRecipe'>
        <div className='recipe-text'>
          <div className='recipe-name'> 추천 레시피 </div>
          <div className='more'> 더보기 <img src={next} alt='next'/>  </div>
        </div>

        <div className='recipePhoto'>
          <div className='photoStyle'> <span> 카레 </span> </div>
          <div className='photoStyle'> <span> 까르보나라 </span> </div>
          <div className='photoStyle'> <span> 닭볶음탕 </span></div>
        </div>
      </div>

      <div className='gredient'>
        핫한 식품
        <div className='saleGrd'>
          <div className='grd-img' />
          
          <div>
            <div className='title'>
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
          <div> + 3개 </div>
        </div>
      </div>

      <div className='grd-more'> 더보기 </div>
    </div>
  );
}

export default MainPage;
