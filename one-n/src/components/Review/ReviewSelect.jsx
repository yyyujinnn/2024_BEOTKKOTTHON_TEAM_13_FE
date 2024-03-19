import React, { useState } from 'react';

export const ReviewSelect = () => {
    const [level, setLevel] = useState(0);

    return (
        <div style={{ position: 'relative', marginBottom: '48px'}}>
            {/* 슬라이더 */}
            <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.25} 
                value={level} 
                onChange={(event) => {
                    setLevel(event.target.valueAsNumber);
                }}
                style={{ border:'none' }} // 슬라이더를 위로 겹치기 위해 z-index 설정
            />
            {/* 점들 */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                position: 'absolute', 
                top: '20px', 
                left: '0', 
                right: '0', 
                padding: '0 8px' 
            }}>
                {[...Array(5)].map((_, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '50%',
                            backgroundColor: '#D9D9D9' 
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
