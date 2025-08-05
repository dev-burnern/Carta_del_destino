import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import QnAPage from './pages/QnAPage.tsx';
import MainLayout from './components/layout/MainLayout.tsx';

function App() {
  return (
    <MainLayout>

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/qna" element={<QnAPage />} />
    </Routes>
    </MainLayout>
  );
}

export default App;
