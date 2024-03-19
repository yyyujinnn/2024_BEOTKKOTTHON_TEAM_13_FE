import React from 'react';
import './ChatRoom.css'

import previous from '../../assets/icons/previous.svg'
import next from '../../assets/icons/next.svg'
import exit from '../../assets/icons/exit.png'
import menu from '../../assets/icons/menu.png'
import img from '../../assets/icons/img.png'
import send from '../../assets/icons/send.png'

function ChatRoom() {
  return (
    <div>
        <div className='room-header'>
          <div className='top-header'>
            <img src={previous} alt='previous'/>

            <div className='product'>
              <div className='product-img' />
              <span> 닭갈비 공동구매 </span>
            </div>

            <div className='rt-header'>
              <img src={exit} alt='exit'/>
              <img src={menu} alt='menu'/>
            </div>
          </div>

          <div className='product-list'> 목록 더보기 <img src={next}/> </div>
        </div>

        <div className='room-body'>


        </div>
        
        <div className='input-msg'>
          <img src={img} alt='img'/>
          <input placeholder='메세지 보내기' />
          <img src={send} alt='send'/>
        </div>
        

        
        
        
    </div>
  )
}

export default ChatRoom;