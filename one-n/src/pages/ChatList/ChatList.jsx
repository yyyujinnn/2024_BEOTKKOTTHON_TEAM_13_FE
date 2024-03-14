import React from 'react';
import './ChatList.css'
import search from '../../assets/icons/search.svg'
import chatting from '../../assets/logo/chatting.png'

function ChatList() {
  return (
    <div>
        <div className='header'>
            <img src={chatting} alt='chatting'/>
        </div>
        
        <div className='search'>
            <img src={search} alt='search' />
        </div>

        <div className='chat'>
            <div className='img' />  
            <div className='seller-img' />
            <div>
                <div className='buyer'> 짱구 <div className='time'> 오후 3:55 </div> </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='text'> 안녕하세요 감자 1.6kg 공동구매 하고싶어요. </div>
                  <div className='info'>2</div>
                </div>
            </div>
        </div>

        <div className='chat'>
            <div className='img' />  
            <div className='seller-img' />
            <div>
                <div className='buyer'> 짱구 <div className='time'> 오후 3:55 </div> </div>
                <div className='text'> 안녕하세요 감자 1.6kg 공동구매 하고싶어요. <div className='info'></div> </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default ChatList;