// import { useNavigate } from "react-router-dom";
import './NavBar.css';
import home from '../../assets/icons/nav-home.svg'
import explore from '../../assets/icons/nav-explore.svg'
import chat from '../../assets/icons/nav-chat.svg'
import map from '../../assets/icons/nav-map.svg'

export const NavBar = () => {
    // const navigate = useNavigate();
    return (
        <div className="navbar">
            <img src={home} alt='home'/>
            <img src={explore} alt='explore'/>
            <img src={chat} alt='chat'/>
            <img src={map} alt='map'/>
        </div>

    )
}