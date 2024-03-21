import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatList.css'

function ChatList() {

  const [data, setData] = useState([]);

  useEffect(() => {
      // API 엔드포인트 URL 설정
      const apiUrl = 'http://20.39.188.154:8080/chats/list?session_id=test_session_id';
  
      axios.get(apiUrl)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('API 요청 에러:', error);
        });
      }, []);

  return (
    <div>
        <div className='chatroom-header'>
        </div>

        <div className='chatlist-body'>
          {data.map((item) => (
             <div key={item.chat_id} className='chat'>
             <div className='sell-img' />  
             <div>
               <div className='buyer'> 
                 짱구
                 <div className='time'> 오후 3:55 </div> 
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <div className='text'> {item.last_message} </div>
                   <div className='info'>2</div>
                   </div>
               </div>
           </div>            
          ))}
        </div>        
    </div>
  )
}

export default ChatList;