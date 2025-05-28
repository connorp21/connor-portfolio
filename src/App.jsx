import React from "react";
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import MainContent from './components/mainContent'

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  )
}