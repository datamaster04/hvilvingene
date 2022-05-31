import '../src/style/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import * as Pages from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';

function App() {
  return <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path='/home'element={<Navigate to={"/"} />} />

        <Route path="/gruppetimer" element={<Pages.Gruppetimer />} />
        <Route path="/kontakt-oss" element={<Pages.KontaktOss />} />
        <Route path="/om-oss" element={<Pages.OmOss />} />
        <Route path="/medlemskap" element={<Pages.medlemskap />} />
      </Routes>
  </BrowserRouter>
}

export default App;

