import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../../pages/ChatRoom/ChatRoom.css';

import sobad from '../../assets/icons/sobad.png'
import bad from '../../assets/icons/bad.png'
import soso from '../../assets/icons/soso.png'
import good from '../../assets/icons/good.png'
import verygood from '../../assets/icons/verygood.png'


export const ReviewSelect = () => {
    const [level, setLevel] = useState(0);

    return (
        <>
        <div style={{ marginLeft:'18px', marginTop: '20px', marginBottom:'40px', width:'85%' }}>
            {/* 수평 슬라이더 */}
            <ReactSlider
                trackClassName='slider'
                min={0} 
                max={1} 
                step={0.25} 
                value={level}
                onChange={(value,index) => {
                    setLevel(value);
                }}
                renderThumb={(props, state) => (
                    <div {...props} style={{ 
                        ...props.style,
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#FFDC25',
                        marginTop: '-5px',
                        cursor: 'pointer'
                    }}/>
                )}
                renderTrack={(props, state) => (
                    <div {...props} style={{ 
                        ...props.style,
                        height: '4px'
                    }} />
                )}
            />
        </div>

        <div style={{display:'flex', fontSize:'12px', gap:'10px', marginBottom: '24px'}}>
                <div style={{ display:'flex', flexDirection: 'column', alignItems:'center' }}>
                    <img src={sobad} width={20}/> 별로에요 
                </div>
                <div style={{ display:'flex', flexDirection: 'column', alignItems:'center' }}>
                    <img src={bad} width={20}/> 아쉬워요 
                </div>
                <div style={{ display:'flex', flexDirection: 'column', alignItems:'center', marginLeft:'-2px' }}>
                    <img src={soso} width={20}/> 괜찮아요 
                </div>
                <div style={{ display:'flex', flexDirection: 'column', alignItems:'center',marginLeft:'4px' }}>
                    <img src={good} width={20}/> 좋아요 
                </div>
                <div style={{ display:'flex', flexDirection: 'column', alignItems:'center', marginLeft:'5px' }}>
                    <img src={verygood} width={20}/> 최고에요 
                </div>
                
            </div>
        </>        
    );
}
