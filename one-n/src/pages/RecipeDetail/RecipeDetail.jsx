// 레시피 상세페이지
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './RecipeDetail.css'
import user from '../../assets/icons/user.png'
import previous from '../../assets/icons/previous.svg';
import dot from '../../assets/icons/dot.png';
import pick from '../../assets/pick.svg'
import FiledPick from '../../assets/filedpick.png'
import arrow from '../../assets/icons/direct-arrow.png'

function RecipeDetail() {
    const navigate = useNavigate();

    const [picked, setPicked] = useState(false);
    
    const togglePicked = () => {
        setPicked(!picked);
    }

  return (
    <div>
        <div className='recipe-header'>
            <img src={previous} alt='previous' onClick={() => navigate(-1)} />
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
                  <img src={picked ? FiledPick : pick} onClick={togglePicked} style={{width: 20}} className="pick" />
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