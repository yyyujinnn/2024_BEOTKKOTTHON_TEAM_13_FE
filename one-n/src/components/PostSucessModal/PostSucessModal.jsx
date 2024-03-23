import ReactModal from 'react-modal';
import save from '../../assets/icons/save.png';
import { useState } from 'react';


export default function PostSucessModal() {
    const [exitModalOpen, setExitModalOpen] = useState(false); // 퇴장

    const onClickExit = () => {
        setExitModalOpen(false);
    }

    return (
        <div>
            <button className='upload-btn' onClick={() => setExitModalOpen(true)} > 등록하기 </button>
            <ReactModal
                isOpen={exitModalOpen}
                style={ExitModalStyles}
                contentLabel="Exit Modal"
            >
                <div className="exitModal">
                    <img src={save} alt='save' />
                    <h3> 성공적으로 등록되었어요!</h3>
                    <button onClick={onClickExit} style={ExitModalStyles.button}> 확인 </button>
                </div>
            </ReactModal>

        </div>

    );

}

const ExitModalStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.3)"
    },
    content: {
      width: "311px",
      height: "240px",
      padding: "32px 16px 0 16px",
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
      width: "132px",
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


