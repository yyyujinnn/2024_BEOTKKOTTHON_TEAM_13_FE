import React from 'react';
import './ChatList.css'
import search from '../../assets/icons/search.svg'

function ChatList() {
  return (
    <div>
        <div className='header'> </div>
        
        <div className='search'>
            <img src={search} alt='search' />
        </div>

        <div className='chat'>
            <div className='img' />
            <div>
                <div className='buyer'> 감자볶음처돌이 <div className='info'></div> </div>
                <div className='text'> 안녕하세요 감자 1.6kg 공동구매 하고싶어요. </div>
            </div>
        </div>
        <div className='chat'>
            <div className='img' />
            <div>
                <div className='buyer'> 감자볶음처돌이 <div className='info'>2</div> </div>
                <div className='text'> 안녕하세요 감자 1.6kg 공동구매 하고싶어요. </div>
            </div>
        </div>
        <div className='chat'>
            <div className='img' />
            <div>
                <div className='buyer'> 감자볶음처돌이 <div className='info'>1</div> </div>
                <div className='text'> 안녕하세요 감자 1.6kg 공동구매 하고싶어요. </div>
            </div>
        </div>
    </div>
  )
}

export default ChatList;