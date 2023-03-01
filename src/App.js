import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import './App.css';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Layout>
);

export default App;
