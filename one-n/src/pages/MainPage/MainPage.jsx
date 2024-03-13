import React from 'react';
import './MainPage.css'

function MainPage() {
  return (
    <div>
      <div className='header'>
            헤더 (로고, 검색아이콘, 마이페이지 이동 아이콘)
      </div>

      <div className='recommendRecipe'>
        추천 레시피 / 더보기 버튼
        <div className='recipePhoto'>
          사진들
        </div>
      </div>

      <div className='gredient'>
        핫한 식품 / 더보기
      </div>
    </div>
  );
}

export default MainPage;
