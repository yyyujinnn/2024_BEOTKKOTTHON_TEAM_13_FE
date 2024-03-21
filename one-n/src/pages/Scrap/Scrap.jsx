import React, { useState, useEffect } from 'react';
import './Scrap.css';
import { ReactComponent as Back } from '../../assets/back.svg'
import Modify from '../../assets/modify.png'
import SaleProduct from '../../components/SaleProduct/SaleProduct';

export default function Scrap() {
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
            "item": ["감자", "라면", "호박고구마", "캔콜라"],
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

    const [satisfaction, setSatisfaction] = useState(44);
    const [products, setProducts] = useState(LocationData);
    const [selectedWishlistButton, setSelectedWishlistButton] = useState('글');
    const handleBackClick = () => {

    }

    const handleWishlistButtonClick = (action) => {
        if (selectedWishlistButton !== action) {
            setSelectedWishlistButton(action); // 선택된 옵션이 현재 선택된 옵션과 다를 때만 상태 변경
        }
    };

    const [selectedOption, setSelectedOption] = useState('ingredients');

    const handleButtonClick = (option) => {
        if (selectedOption !== option) {
            setSelectedOption(option); // 선택된 옵션이 현재 선택된 옵션과 다를 때만 상태 변경
        }
    };

    return (
        <div className='scrap-container'>
            <div className='scrap-back-button-container'>
                <button className='scrap-back-button' onClick={handleBackClick}>
                    <Back />
                </button>
            </div>
            <div className='scrap-profile-container'>
                <div className='scrap-profile-image'>
                    <button className='profile-modify-button'>
                        <img src={Modify} alt='Modify'></img>
                    </button>

                </div>
                <div className='scrap-profile-name-satisfaction-container'>
                    <div className='scrap-profile-name'>최강벚꽃톤부셔버려</div>

                    <div className="my-satisfaction-container" >
                        <span className='my-satisfaction-num'>
                            만족도 {satisfaction !== null ? satisfaction + "%" : "불러오는 중..."}
                        </span>
                        <div className='my-satisfaction-bar'>
                            <div className='my-satisfaction-fill' style={{ width: `${satisfaction}%` }}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='scrap-option-container'>
                <div className='option-buttons'>
                    <button className={selectedOption === 'ingredients' ? 'active' : ''} onClick={() => handleButtonClick('ingredients')}>재료</button>
                    <button className={selectedOption === 'recipe' ? 'active' : ''} onClick={() => handleButtonClick('recipe')}>레시피</button>
                    <button className={selectedOption === 'wishlist' ? 'active' : ''} onClick={() => handleButtonClick('wishlist')}>찜</button>
                </div>
            </div>
            {selectedOption === 'ingredients' &&
                products.map((product, index) => (
                    <SaleProduct key={index} product={product} />
                ))
            }
            {selectedOption === 'wishlist' && (
                <div className="wishlist-buttons">
                    <button className={selectedWishlistButton === '글' ? 'wishlist-button active' : 'wishlist-button'} onClick={() => handleWishlistButtonClick('글')}>글</button>
                    <button className={selectedWishlistButton === '레시피' ? 'wishlist-button active' : 'wishlist-button'} onClick={() => handleWishlistButtonClick('레시피')}>레시피</button>
                </div>
                

            )}
            {selectedWishlistButton === '글' &&
                products.map((product, index) => (
                    <SaleProduct key={index} product={product} />
                ))
            }
        </div>
    )
}
