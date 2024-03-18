// 레시피 상세페이지
import React from 'react';
import './RecipeDetail.css'
import user from '../../assets/icons/user.png'
import previous from '../../assets/icons/previous.svg';
import dot from '../../assets/icons/dot.png';
import like24 from '../../assets/icons/like24.png';
import chat from '../../assets/icons/chat.svg';
import share from '../../assets/icons/share.svg';
import arrow from '../../assets/icons/direct-arrow.png'

function RecipeDetail() {
  return (
    <div>
        <div className='recipe-header'>
            <img src={previous} alt='previous' />
            <img src={dot} alt='dot' />
        </div>

        <div className='body'>

            <div className='recipe-img' />
            <div className='user'>
                <img src={user} />
                <div>스텔라 1245</div>
            </div>
            

            <div className='recipe-title'>
                <div > 콘치즈 </div>
                <div className='indicate'>
                   <img src={like24} alt='like' style={{width: '21px', height: '22px'}} /> 
                   12 
                </div>
            </div>
            
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginTop: '40px'}}> 재료 </div>
            <div className='grd-tag'>
                <div> 모짜렐라 치즈 <img src={arrow} /> </div> 1개 
                <div> 스위트콘 <img src={arrow} /> </div> 1개
                <div> 마요네즈 <img src={arrow} /> </div> 3 티스푼
                <div> 설탕 <img src={arrow} /> </div> 1 티스푼
            </div>
            

            <div className='cook'> 요리 방법 </div>
                <div className='step-img'/>
                <div className='cook-step'>
                    <div className='step1'> 1 </div>
                    <div className='step1-detail'> 스위트콘의 물기를 빼줍니다.</div>
                </div>

                <div className='step-img'/>
                <div className='cook-step'>
                    <div className='step1'> 2 </div>
                    <div className='step1-detail'> 스위트콘의 물기를 빼줍니다.</div>
                </div>

                <div className='step-img'/>
                <div className='cook-step'>
                    <div className='step1'> 3 </div>
                    <div className='step1-detail'> 스위트콘의 물기를 빼줍니다.</div>
                </div>
        </div>







    </div>
  )
}

export default RecipeDetail;