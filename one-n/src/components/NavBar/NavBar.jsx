import { NavLink } from 'react-router-dom';
import './NavBar.css';
import home from '../../assets/icons/nav-home.png'
import explore from '../../assets/icons/nav-explore.png'
import chat from '../../assets/icons/nav-chat.png'
import map from '../../assets/icons/nav-map.png'

import inhome from '../../assets/icons/nav-in-home.png'
import inexplore from '../../assets/icons/nav-in-explore.png'
import inchat from '../../assets/icons/nav-in-chat.png'
import inmap from '../../assets/icons/nav-in-map.png'

export const NavBar = () => {
    return (
        <div className="navbar">
            
            {/* <NavLink to="/" className='nav-home' isActive={(match, location) => location.pathname === '/'}>
                {isActive => isActive ? <img src={inhome} alt='home' /> : <img src={home} alt='home' />}
            </NavLink>

            <NavLink to="/explore" className='nav-explore' isActive={(match, location) => location.pathname === '/'}>
                {isActive => isActive ? <img src={inexplore} alt='inexplore' /> : <img src={explore} alt='explore' />}
            </NavLink>

            <NavLink to="/map" className='nav-map' isActive={(match, location) => location.pathname === '/'}>
                {isActive => isActive ? <img src={inmap} alt='inmap' /> : <img src={map} alt='map' />}
            </NavLink>

            <NavLink to="/chat" className='nav-chat' isActive={(match, location) => location.pathname === '/'}>
                {isActive => isActive ? <img src={inchat} alt='chat' /> : <img src={chat} alt='chat' />}
            </NavLink> */}


            <img src={home} alt='home'/>
            <img src={explore} alt='explore'/>
            <img src={map} alt='map'/>
            <img src={chat} alt='chat'/>
        </div>

    )
}