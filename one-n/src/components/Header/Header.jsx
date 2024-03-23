import React from 'react';
import logo from '../../assets/logo/logo.png';
import search from '../../assets/icons/search.svg';
import mypage from '../../assets/icons/mypage.svg';

import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className='header-icon'>
                <img src={logo} alt='logo' className='logo-img' />

                <div className='right-header' >
                    <Link to='/search'>
                        <img src={search} alt='search' />
                    </Link>
                    <Link to='/scrap'>
                        <img src={mypage} alt='mypage' />
                    </Link>
                </div>
            </div>
        </div>
    );
}
