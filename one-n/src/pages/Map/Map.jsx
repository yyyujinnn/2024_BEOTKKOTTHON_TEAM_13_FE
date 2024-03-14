// Map 컴포넌트 수정
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // 카카오 지도 API 불러오기
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오 지도 API 초기화
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map');
        const options = {
          center: new window.kakao.maps.LatLng(37.506502, 127.053617), // 서울시 강남구 위치를 기준으로 지도 초기화
          level: 3 // 지도 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options);

        // 사용자의 현재 위치 가져오기
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const userPosition = new window.kakao.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );

            // 사용자의 현재 위치에 마커 추가
            const marker = new window.kakao.maps.Marker({
              position: userPosition,
              map: map
            });

            // 지도 중심을 사용자의 현재 위치로 설정
            map.setCenter(userPosition);
          });
        }
      });
    };

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거
      document.head.removeChild(script);
    };
  }, []);

  return <div id="kakao-map" style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
