import React from 'react'
import './app.css'

import RequireAuth from '@auth-kit/react-router/RequireAuth'

import {  Routes, Route } from 'react-router-dom'

import { ChatContent, Home, SignIn } from './Containers'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chat" element={
          <RequireAuth fallbackPath='/login'>
            <ChatContent />
          </RequireAuth>
        } />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App