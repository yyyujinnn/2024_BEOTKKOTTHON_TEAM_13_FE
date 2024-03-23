import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatList.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

function ChatList() {

  const navigate = useNavigate();

  const [chat, setChat] = useState([]);
  const [unreadCounts, setUnreadCounts] = useState({});
  
  const [signinData, setSigninData] = useState(null);

  useEffect(() => {
    const storedSigninData = sessionStorage.getItem('signinData');
    if (storedSigninData) {
      setSigninData(JSON.parse(storedSigninData));
      console.log(signinData)
    }
  }, [signinData]);


  const handleChatClick = (chatId) => {
    navigate(`/chatroom/${chatId}`);
  };

  useEffect(() => {
    // 참가 채팅방
    const apiUrl = `http://20.39.188.154:8080/chats/list?session_id=${signinData}`;
    // 미확인 채팅
    const unreadApiUrl = `http://20.39.188.154:8080/chats/unread-messages?session_id=${signinData}`;

    // 채팅 목록
    axios.get(apiUrl)
      .then((response) => {
        setChat(response.data);
        console.log(response.data);
        console.log(signinData);
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });

    // 안 읽은 채팅 개수
    axios.get(unreadApiUrl)
      .then(response => {
        // chat_id를 기준으로 그룹화, 채팅방마다 안 읽은 메시지 갯수를 카운트
        const unreadCountsData = response.data.reduce((counts, chat) => {
          counts[chat.chat_id] = (counts[chat.chat_id] || 0) + 1;
          return counts;
        }, {});
        setUnreadCounts(unreadCountsData);
      })
      .catch(error => {
        console.error('API 요청 에러:', error);
      });
  }, [signinData]);

  return (
    <div>
      <div className='header-container'><Header /></div>
  
      <div className='chatlist-body'>
        {chat.length === 0 ? 
        (
          <div style={{
            position:'absolute', top: '13%',left: '27%', color: '#7F7F7F'
          }}> 생성된 채팅방이 없습니다. </div>
        ) : 
        (
          chat.map((item) => (
            <div key={item.chat_id} onClick={() => handleChatClick(item.chat_id)} className='chat'>
              <div className='sell-img' />  
              <div className='wrap'>
                <div className='buyer'> 
                  {item.post_title}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='text'> {item.last_message} </div>
                  {unreadCounts[item.chat_id] !== 0 && (
                    <div className='info'> {unreadCounts[item.chat_id]} </div>
                  )}
                </div>
              </div>
            </div>
          ))     
        )}
      </div>
    </div>
  );
                  }
  
export default ChatList;
