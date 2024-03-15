import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { NavBar } from './components/NavBar/NavBar'
import ChatList from './pages/ChatList/ChatList';

function App() {
  return (
    <div className="App">
        <MainPage />
      {/* <ChatList /> */}
        <NavBar />
    </div>
  );
}

export default App;
