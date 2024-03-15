// 레시피 상세페이지
import React from 'react';
import './RecipeDetail.css'
import previous from '../../assets/icons/previous.svg';
import dot from '../../assets/icons/dot.png';
import like24 from '../../assets/icons/like24.svg';

function RecipeDetail() {
  return (
    <div>
        <div className='recipe-header'>
            <img src={previous} alt='previous' />
            <img src={dot} alt='dot' />
        </div>

        <div className='body'>

            <div className='recipe-img' />

            <div className='recipe-title'>
                <div > 감자볶음 </div>
                <img src={like24} alt='like24'/>
            </div>

            <div className='sub-tag'>
                <div> 여러인분 가능 </div>
                <div> 1인분당 112kcal </div>
            </div>

            <div className='nutrition'> 영양정보</div>            
            <div className='nutrition-detail'>
                감자볶음은 어쩌고저쩌고
            </div>
            
            <div style={{ display:'flex', marginTop:'32px', gap:'10px'}} >
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#333'}}> 필요 재료 </div>
                <div style={{ fontSize: '14px', fontWeight: '400', color: '#666'}}> 1인분 기준 </div>
            </div>

            <div className='cook'> 요리 방법 </div>
            <div className='cook-step'>
                <div className='step-img'/>
                <div>
                    <div className='step1'> 1. 감자 깎기 </div>
                    <div className='step1-detail'> 감자 1개를 요리도구를 사용해 껍질을 깎아주세요.</div>
                </div>
            </div>
        </div>







    </div>
  )
}

export default RecipeDetail;