import './footer.css'
import ThemeToggle from './light-dark-toggle'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="scroller">
                <span>
                    Coded in React by Connor Parker
                </span>
                <div className="toggle">
                    <ThemeToggle/>
                </div>
            </div>
        </footer>
    )
}