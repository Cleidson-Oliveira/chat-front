import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ChatProvider } from "./context/chat";
import { Chat } from "./pages/chat";
import { Home } from "./pages/home";
import { globalStyles } from "./style/global";

interface UserList {
  name: string,
  id: string,
  status: string
}

export function App() {
  globalStyles();

  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/chat">
            <Route path=':id' element={<Chat />} />
          </Route>

        </Routes>
      </Router>
    </ChatProvider>
  )
}
