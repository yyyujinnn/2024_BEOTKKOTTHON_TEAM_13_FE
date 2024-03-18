// 레시피 등록페이지
import React, { useState } from 'react';
import './RecipeReg.css'

import previous from '../../assets/icons/previous.svg';
import camera from '../../assets/icons/camera.png';

import { PlusStep } from '../../components/Recipe/PlusStep';
import { PlusGrd } from '../../components/Recipe/PlusGrd';

function RecipeReg() {

    // 사진 업로드
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    // 재료 추가
    const [GrdCount, setGrdCount] = useState(0);

    const addGrd = () => {
        setGrdCount(prevCount => prevCount + 1);
    };

    // 과정 추가
    const [StepCount, setStepCount] = useState(0);

    const addStep = () => {
        setStepCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div className='reg-header'>
                <img src={previous} alt='previous' />
                레시피 게시글 작성
            </div>
            
            <div className='reg-body'>
                <div className='title-reg'> 이름 </div>
                <input type="text" className='input-title' placeholder="요리 이름을 입력해주세요." />

                
                <div className='title-reg'> 표지 이미지 </div>
                <div className="input-top-img">
                    {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
                    {!image && (
                      <>
                        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} id="imageInput" />
                        <label htmlFor="imageInput"> <img src={camera} alt='camera'/> </label>
                      </>
                    )}
                </div>

                
                <div className='title-reg' style={{marginBottom: '16px'}}> 필요 재료 </div>
                <PlusGrd/>
                <PlusGrd/>
                <PlusGrd/>

                {[...Array(GrdCount)].map((_, index) => (
                  <PlusGrd key={index} />
                ))}

                <button className='plus-btn' onClick={addGrd}> 재료 추가 </button>
                
                
                <div className='title-reg' style={{margin: '24px 0 16px 0'}}> 요리 과정 </div>
                <PlusStep/>

                {[...Array(StepCount)].map((_, index) => (
                  <PlusStep key={index} />
                ))}
             
                <button className='plus-btn' onClick={addStep}> 과정 추가 </button>


                
                <button className='upload-btn' > 등록하기 </button>


            </div>
        </div>
    )
}

export default RecipeReg;