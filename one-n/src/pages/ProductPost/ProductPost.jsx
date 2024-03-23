//공동구매 게시글 작성 페이지
import { ReactComponent as Back } from '../../assets/back.svg'
import { ReactComponent as Next } from '../../assets/Next.svg'
import ReactModal from 'react-modal';
import InputForm from '../../components/InputForm/InputForm';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../components/MyContextProvider/MyContextProvider';
import IngredientPost from '../../components/ProductPostForm/IngredientPost';
import RecipeIngredientsPost from '../../components/ProductPostForm/RecipeIngredientsPost';
import './ProductPost.css'
import Camera from '../../assets/camera.png'
import PostSucessModal from '../../components/PostSucessModal/PostSucessModal';
import quit from '../../assets/icons/quit.png';
import save from '../../assets/icons/save.png';


export default function ProductPost() {
    const [selectedOption, setSelectedOption] = useState('ingredients');
    const [imageUploaded, setImageUploaded] = useState(false); // 이미지가 업로드되었는지 여부
    const [imageURL, setImageURL] = useState(''); // 이미지 URL 상태 추가
    const navigate = useNavigate();
    const { selectLocation, setSelectLocation } = useContext(MyContext);
    const [showModal, setShowModal] = useState(false);
    // const [userLocation, setUserLocation] = useState(null); // 사용자 위치 정보 상태 추가


    const [closeModalOpen, setCloseModalOpen] = useState(false); // 닫기
    const [exitModalOpen, setExitModalOpen] = useState(false); // 퇴장

    const onClickclose = () => {
        setCloseModalOpen(false);
    }
    const onClickExit = () => {
        setExitModalOpen(false);
    }



    const handleButtonClick = (option) => {
        if (selectedOption !== option) {
            setSelectedOption(option); // 선택된 옵션이 현재 선택된 옵션과 다를 때만 상태 변경
        }
    };

    const handleImageClick = () => {
        setImageUploaded(false);
        setImageURL('');
    };

    const handleBackClick = () => {
        console.log("클릭툄");
        navigate('/');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0]; // 선택한 파일 가져오기
        const reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성

        reader.onloadend = () => {
            // 파일 읽기가 완료되었을 때
            setImageURL(reader.result); // 이미지 URL을 상태에 설정하여 이미지 표시
            setImageUploaded(true); // 이미지 업로드 상태를 true로 변경
        };

        if (file) {
            reader.readAsDataURL(file); // 파일을 읽어서 base64 형태로 변환
        }
    };


    const { postAddress, setPostAddress,
        postTitle, setPostTitle,
        postURL, setPostURL,
        postPrice, setPostPrice,
        postPeople, setPostPeople,
        postContent, setPostContent,
        postYear, setPostYear,
        postMonth, setPostMonth,
        postDay, setPostDay } = useContext(MyContext);

    const handleYearInputChange = (e) => {
        setPostYear(e.target.value);
    }

    const handleMonthInputChange = (e) => {
        setPostMonth(e.target.value);
    }

    const handleDayInputChange = (e) => {
        setPostDay(e.target.value);
    }

    const handleLocationButtonClick = () => {

        if (selectLocation) {
            setSelectLocation(false);
        }
        else {
            setSelectLocation(true);
        }
        // 원하는 로직 추가
        console.log('거래 희망 장소 버튼을 클릭했습니다.');

        // 이동할 경로로 리다이렉션 수행
        navigate('/select-location');
    };


    const handlePostButtonClick = () => {
        console.log(postTitle);
        console.log(postURL);
        console.log(postPrice);
        console.log(postPeople);
        console.log(postContent);
        console.log(postAddress);

        setShowModal(true);
    };


    return (
        <div className='product-post-container'>
            <div className="product-post-header">
                <button className='post-back-button' onClick={()=>setCloseModalOpen(true)}>
                    <Back />
                </button>
                <ReactModal
                isOpen={closeModalOpen}
                style={CloseModalStyles}
                contentLabel="Close Modal"
              >
                <div className="closeModal">
                    <img src={quit} alt='quit' />
                    <h3> 작성을 취소하시겠어요?</h3>
                    <h4>
                        작성하던 글은 모두 사라지며
                        <br/>
                        임시저장되지 않습니다.
                    </h4>
                    <div style={{ display:"flex", gap:"16px" }}>
                        <button onClick={()=> navigate(-1)} style={{...CloseModalStyles.button, background:"#FFF", border:"1px solid #D9D9D9"}}> 취소하기 </button>
                        <button onClick={onClickclose} style={CloseModalStyles.button}> 계속하기 </button>
                    </div>
                  </div>
                </ReactModal>

                <div className='product-post-text'>
                    <p className='centered-text'>공동구매 게시글 작성</p>
                </div>
            </div>
            <div className='product-post-image'>
                {!imageUploaded ? (
                    <label htmlFor="image-upload" className="image-upload-label">
                        <img src={Camera} alt="Upload Image" onClick={handleImageClick} />
                        <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                    </label>
                ) : (
                    <img src={imageURL} alt="Uploaded" onClick={handleImageClick} />
                )}
            </div>

            <p className='product-post-select-text'>유형 </p>
            <div className='product-post-select'>
                <div className='option-buttons'>
                    <div className='option-buttons'>
                        <button className={selectedOption === 'ingredients' ? 'active' : ''} onClick={() => handleButtonClick('ingredients')}>재료</button>
                        <button className={selectedOption === 'recipe' ? 'active' : ''} onClick={() => handleButtonClick('recipe')}>레시피 재료</button>
                    </div>

                </div>
            </div>
            <InputForm title='제목' placeholder='글 제목을 입력해주세요.' />



            {selectedOption === 'ingredients' ? <IngredientPost /> : <RecipeIngredientsPost />}

            <div className='product-post-place'>
                <p className='product-post-place-text'>거래 희망 장소 </p>
                <button className='next-button' onClick={handleLocationButtonClick}>
                    <Next />
                </button>
            </div>
            <div className='product-post-select-place-container'>
                <input className='product-post-select-place' placeholder='거래 희망 장소를 선택하세요.' defaultValue={postAddress}></input>
            </div>
            <div className='product-sale-due-date'>
                <div className='product-sale-due-date-text' >거래 마감일</div>
                <div className='year-month-day'>
                    <input className='due-date-placeholder' placeholder=' 년도'
                        onChange={handleYearInputChange}
                        value={postYear}></input>
                    <input className='due-date-placeholder' placeholder=' 월' onChange={handleMonthInputChange} value={postMonth}></input>
                    <input className='due-date-placeholder' placeholder=' 일' onChange={handleMonthInputChange} value={postDay}></input>
                </div>
            </div>


            <div>
                <div className='product-post-button-container'>
                    <button className='product-post-button' onClick={() => setExitModalOpen(true)}>올리기</button>
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
            </div>

            {
                showModal && (
                    <PostSucessModal />
                )
            }
        </div>
    );
}

const CloseModalStyles = {
    overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.3)"
    },
    content: {
        width: "311px",
        height: "300px",
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
        width: "131px",
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