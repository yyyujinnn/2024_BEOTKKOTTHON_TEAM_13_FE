import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './ChatRoom.css'

import previous from '../../assets/icons/previous.svg'
import next from '../../assets/icons/next.svg'
import down from '../../assets/icons/down.png'
import exit from '../../assets/icons/exit.png'
import menu from '../../assets/icons/menu.png'
import img from '../../assets/icons/img.png'
import send from '../../assets/icons/send.png'

import { SellList } from '../../components/Chat/SellList';
import { ReviewSelect } from '../../components/Review/ReviewSelect';

function ChatRoom() {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);  
  const [level, setLevel] = useState(0);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const onClickExit = () => {
    setExitModalOpen(false);
  }

  
  const onClickReview = () => {
    setReviewModalOpen(false);
  }


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
              <img src={exit} onClick={() => setExitModalOpen(true)} alt='exit'/>
              <ReactModal
                isOpen={exitModalOpen}
                style={ExitModalStyles} // 스타일 적용
                contentLabel="Exit Modal" // 접근성을 위한 레이블
              >
                <div className="exitModal">
                  <div style={{fontSize: '20px', fontWeight: '700', marginBottom: '18px'}}>정말 퇴장하시겠어요?</div>
                  <div style={{fontSize: '16px', fontWeight: '500', marginBottom: '24px'}}> 채팅방은 영구적으로 삭제되며
                    <br/>
                    거래는 자동으로 취소됩니다.
                  </div>
                  
                  <button onClick={onClickExit} style={ExitModalStyles.button}> 확인 </button>
                  </div>
                </ReactModal>
              
              <img src={menu} onClick={() => setReviewModalOpen(true)} alt='menu'/>
              <ReactModal
                isOpen={reviewModalOpen}
                style={ReviewModalStyles} // 스타일 적용
                contentLabel="Review Modal" // 접근성을 위한 레이블
              >
                <div className="reviewModal">
                  <div style={{padding: '12px'}}> 리뷰 작성</div>

                  <div className='review-body'>
                    <input placeholder='거래에 대한 후기를 작성해주세요.'/>
                    <div style={{margin: '16px 16px  0 16px'}}> 만족도</div>

                    <ReviewSelect/>
                    

                  </div>
                  
                  <button onClick={onClickReview} style={ReviewModalStyles.button}> 등록하기 </button>
                  </div>
                </ReactModal>
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

const ExitModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.3)"
  },
  content: {
    width: "311px",
    height: "147px",
    padding: "24px 16px 32px 16px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    backgroundColor: "white",
    display: 'flex',
    justifyContent: "center",
    textAlign: "center",
    overflow: "auto",
  },
  button: {
    width: "279px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "500",
    backgroundColor: "#FFDC25",
    color: "#191919",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

const ReviewModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.3)"
  },
  content: {
    width: "311px",
    height: "360px",
    padding: "16px 0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'center',
    textAlign: "center",
    overflow: "auto",
  },
  button: {
    width: "279px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "500",
    backgroundColor: "#FFDC25",
    color: "#191919",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default ChatRoom;