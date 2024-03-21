import React, { useEffect, useState } from 'react';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import './Map.css'
import LocationImage from '../../assets/Marker.svg'
import SetLocation from '../../assets/setlocation.png'

const LocationData = [

    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "샐러드 공동구매 합니다.",
        "price": "4,000원",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "address": "서천동 위치 1",
        "latitude": 37.275504,
        "name": "박나리",
        "longitude": 127.107736
    },
    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "감자 공동구매 하실 분",
        "price": "4,000원",
        "item": [],
        "satisfaction": '89',
        "address": "서천동 위치 2",
        "name": "박나리",
        "latitude": 37.269682,
        "longitude": 127.101832
    },
    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "짱구33",
        "price": "5",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "address": "근처 식당",
        "name": "박나리",
        "latitude": 37.273240,
        "longitude": 127.101458
    },
    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "짱구44",
        "price": "5",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "name": "박나리",
        "address": "TEST1",
        "latitude": 37.236399457807806,
        "longitude": 127.07254154778428
    },
    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "짱구55",
        "price": "5",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "address": "TEST2",
        "name": "박나리",
        "latitude": 37.23670640302805,
        "longitude": 127.0715726640949
    },
    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "짱구66",
        "price": "5",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "address": "TEST3",
        "name": "박나리",
        "latitude": 37.237544006041105,
        "longitude": 127.07218201622115
    },
    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "짱구77",
        "price": "5",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "address": "근처 카페",
        "name": "박나리",
        "latitude": 37.270842,
        "longitude": 127.102785
    },

    {
        "image": "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fthumbnail7.coupangcdn.com%2Fthumbnails%2Fremote%2F492x492ex%2Fimage%2Frs_quotation_api%2Fysrimegn%2F61c98841c46b4834becfb17ae6097027.jpg&blockId=2618ba81-a66c-4218-aff7-0e1ca5ba2b51",
        "title": "짱구88",
        "level": "5",
        "item": ["감자", "라면", "호박고구마", "캔콜라", "감자"],
        "satisfaction": '89',
        "name": "박나리",
        "address": "근처 카페",
        "latitude": 37.242040,
        "longitude": 127.080202
    }
];

const Map = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState(LocationData);
    const [marker, setMarker] = useState(null);
    const [myLocation, setMyLocation] = useState(false);

    const moveToUserLocation = () => {
        if(myLocation) {
            setMyLocation(false);
        }
        else {
            setMyLocation(true);
        }
        
    };


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
                    level: 3, // 지도 확대 레벨

                };
                const map = new window.kakao.maps.Map(container, options);

                // 마커 추가
                LocationData.forEach(markerData => {
                    const position = new window.kakao.maps.LatLng(markerData.latitude, markerData.longitude);

                    // 원의 옵션 설정
                    const circleOptions = {
                        center: position, // 중심 좌표 설정
                        radius: 6, // 파란색 동그라미의 반지름 설정
                        strokeWeight: 0, // 테두리 두께 설정
                        fillColor: '#FFDC25', // 채우기 색상 설정
                        fillOpacity: 1 // 채우기 투명도 설정
                    };

                    // 원 생성
                    const circle = new window.kakao.maps.Circle(circleOptions);

                    // 지도에 원 추가
                    circle.setMap(map);

                    window.kakao.maps.event.addListener(circle, 'click', () => {
                        setSelectedProduct(markerData);

                        if (marker) {
                            console.log("dfdfdf");
                            marker.setMap(null);
                        }
                        console.log("눌림");


                        const markerImage = new window.kakao.maps.MarkerImage(
                            LocationImage, // 마커 이미지 경로
                            new window.kakao.maps.Size(33, 40), // 마커 이미지 크기
                        );

                        const newMarker = new window.kakao.maps.Marker({
                            position: position,
                            map: map,
                            image: markerImage
                        });

                        // 새로운 마커를 markers 상태에 추가
                        setMarker(newMarker);

                        // 선택한 상품을 리스트의 맨 앞으로 이동
                        setProducts(prevProducts => {
                            const updatedProducts = prevProducts.filter(product => product !== markerData);
                            return [markerData, ...updatedProducts];
                        });
                    });
                });


                // 사용자의 현재 위치 가져오기
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const userPosition = new window.kakao.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );

                        // 파란색 동그라미 스타일 설정
                        const circle1 = new window.kakao.maps.Circle({
                            center: userPosition,
                            radius: 6, // 파란색 동그라미의 반지름 설정
                            strokeWeight: 0, // 테두리 두께 설정
                            fillColor: '#0085FF', // 채우기 색상 설정
                            fillOpacity: 1, // 채우기 투명도 설정
                            shadow: {
                                color: "#000", // 그림자 색상
                                blur: 5, // 그림자의 흐림 정도
                                offsetX: 3, // 그림자의 X축 위치
                                offsetY: 3, // 그림자의 Y축 위치
                                opacity: 0.25 // 그림자의 투명도
                            }
                        });

                        const circle2 = new window.kakao.maps.Circle({
                            center: userPosition,
                            radius: 12, // 두 번째 원의 반지름 설정
                            strokeWeight: 0, // 테두리 두께 설정
                            fillColor: '#007bff', // 채우기 색상 설정
                            fillOpacity: 0.2 // 채우기 투명도 설정
                        });

                        // 두 개의 원을 지도에 추가
                        circle1.setMap(map);
                        circle2.setMap(map);

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
    }, [myLocation]);
    



    useEffect(() => {
        // 선택된 상품이 변경될 때마다 해당 상품을 리스트의 맨 앞으로 이동
        if (selectedProduct) {
            setProducts(prevProducts => {
                const updatedProducts = prevProducts.filter(product => product !== selectedProduct);
                return [selectedProduct, ...updatedProducts];
            });
        }
    }, [selectedProduct]);

    return (
        <>
            <button className='set-location-button' onClick={moveToUserLocation}>
                <img src={SetLocation} alt='SetLocation' className='set-location-image' />
            </button>
            <div id="kakao-map" style={{ width: '100%', height: '70vh' }} />

            <div className="bottom-panel">
                {products.map((product, index) => (
                    <SaleProduct key={index} product={product} />
                ))}
            </div>
        </>
    );
};

export default Map;
