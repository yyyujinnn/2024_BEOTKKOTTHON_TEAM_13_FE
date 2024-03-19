import React, { useState } from 'react';
import './ChatRoom.css'

import previous from '../../assets/icons/previous.svg'
import next from '../../assets/icons/next.svg'
import down from '../../assets/icons/down.png'
import exit from '../../assets/icons/exit.png'
import menu from '../../assets/icons/menu.png'
import img from '../../assets/icons/img.png'
import send from '../../assets/icons/send.png'

import { SellList } from '../../components/Chat/SellList';

function ChatRoom() {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
        <div className='room-header'>
          <div className='top-header'>
            <img src={previous} style={{ cursor: 'pointer' }}/>

            <div className='product'>
              <div className='product-img' />
              <span> 닭갈비 공동구매 </span>
            </div>

            <div className='rt-header'>
              <img src={exit} alt='exit'/>
              <img src={menu} alt='menu'/>
            </div>
          </div>

          <div className='product-list' onClick={toggleDropdown}> 목록 더보기 
          {dropdownVisible ? <img src={down}/> : <img src={next}/> }</div>
          {dropdownVisible && (
          <div id='dropdown' className='dropdown'>
            <SellList />
          </div>
          )}
        </div>

        <div className='room-body'>


        </div>
        
        <div className='input-msg'>
          <img src={img} alt='img'/>
          <input placeholder='메세지 보내기' />
          <img src={send} alt='send' className='send'/>
        </div>
        

        
        
        
    </div>
  )
}

export default ChatRoom;