import React from 'react';
import { NavBar } from './components/NavBar/NavBar'
import MainPage from './pages/MainPage/MainPage';
import ChatList from './pages/ChatList/ChatList';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';

function App() {
  return (
    <div className="App">
        {/* <MainPage /> */}
        {/* <ChatList /> */}
        {/* <ChatRoom /> */}
        <RecipeDetail />
        <NavBar />
    </div>
  );
}

export default App;
