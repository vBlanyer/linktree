import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginView from './routes/loginViews';
import DashboardView from './routes/DashboardView';
import EditProfileView from './routes/EditProfileView';
import SignOutView from './routes/SignOutView';
import PublicProfielView from './routes/PublicProfielView';
import ChooseUsernameView from './routes/ChooseUsernameView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<LoginView />} />
      <Route path='dashboard' element={<DashboardView />} />
      <Route path='dashboard/profile' element={<EditProfileView />} />
      <Route path='signout' element={<SignOutView />} />
      <Route path='u/:username' element={<PublicProfielView />} />
      <Route path='chose-username' element={<ChooseUsernameView />} />
    </Routes>
  </BrowserRouter>
);