import React from "react";
import { Link } from "react-router-dom";
import './alt-header.css'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
              <ul>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <p><Link to="/home">Return to Homepage</Link></p>
            </nav>
        </header>
    )
}