import React from "react";
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  let [chats, setChats] = useState();

  const fetchChats = async () => {
    const chats = await axios.get("")
  }
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Route path="/" component={HomePage}></Route>
      <Route path="/chats" component={ChatPage}></Route>
    </div>
  );
}
export default App;
