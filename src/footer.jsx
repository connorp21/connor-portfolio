import { useState } from 'react'
import './footer.css'

export default function Footer() {
    const [isPushed, setIsPushed] = useState(false);

    const handleClick = () => {
        setIsPushed(true);
        setTimeout(() => setIsPushed(false), 1000);
    }

    return (
        <footer className="footer">
            <div className="scroller">
                <span
                className={isPushed ? 'pushed' : ''}
                onClick={handleClick}
                >
                    Coded in React by Connor Parker
                </span>
            </div>
        </footer>
    )
}