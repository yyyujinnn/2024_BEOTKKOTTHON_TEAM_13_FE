import React, { useState, useEffect } from 'react';
import useDidMountEffect from './useDidMountEffect';
import CustomMarker from '../../assets/Marker.svg'
import Location from '../../assets/Location.png'
import './SelectLocation.css'

export default function SelectLocation() {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  // 1) 카카오맵 불러오기
  useEffect(() => {
    if (!window.kakao) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };

          setMap(new window.kakao.maps.Map(container, options));
          setMarker(new window.kakao.maps.Marker());
        });
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  // 2) 최초 렌더링 시에는 제외하고 map이 변경되면 실행
  useDidMountEffect(() => {
    if (map) {
      // 사용자의 현재 위치를 가져옴
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const userPosition = new window.kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          // 사용자 위치를 원으로 표시
          const circle1 = new window.kakao.maps.Circle({
            center: userPosition,
            radius: 6,
            strokeWeight: 0,
            fillColor: '#0085FF',
            fillOpacity: 1,
            shadow: {
              color: '#000',
              blur: 5,
              offsetX: 3,
              offsetY: 3,
              opacity: 0.25
            }
          });

          const circle2 = new window.kakao.maps.Circle({
            center: userPosition,
            radius: 12,
            strokeWeight: 0,
            fillColor: '#007bff',
            fillOpacity: 0.2
          });

          // 원을 지도에 추가
          circle1.setMap(map);
          circle2.setMap(map);

          // 사용자 위치를 지도의 중심으로 설정
          map.setCenter(userPosition);
        });
      }
    }
  }, [map]);

  // 3) 지도 클릭 시 주소 가져오고 마커 표시
  useEffect(() => {
    if (map) {
      const markerImage = new window.kakao.maps.MarkerImage(
        CustomMarker, // 마커 이미지 경로
        new window.kakao.maps.Size(33, 40), // 마커 이미지 크기
      );
  
      const newMarker = new window.kakao.maps.Marker({
        map: map,
        image: markerImage
      });
  
      const clickListener = window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        var geocoder = new window.kakao.maps.services.Geocoder();
  
        geocoder.coord2Address(
          mouseEvent.latLng.getLng(),
          mouseEvent.latLng.getLat(),
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              var addr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address.address_name;
  
              console.log('주소:', addr);
              console.log('위도:', mouseEvent.latLng.getLat());
              console.log('경도:', mouseEvent.latLng.getLng());
  
              setSelectedAddress(addr);
              setModalVisible(true);
  
              // 마커 위치 업데이트
              newMarker.setPosition(mouseEvent.latLng);
            }
          }
        );
      });
  
      return () => {
        window.kakao.maps.event.removeListener(clickListener);
      };
    }
  }, [map]);
  
  
  

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p className='modal-address'>{selectedAddress}</p>
            <button className='modal-address-button'>이 주소로 설정하기</button>
          </div>
        </div>
      )}
    </div>
  );
}
