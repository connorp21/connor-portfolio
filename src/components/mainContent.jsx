import './mainContent.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import Resume from "../pages/resume";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import { Navigate } from 'react-router-dom';

export default function MainContent() {
    return (
        <main className="main-content">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </main>
    )
}