import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button className="button" onClick={() => setDarkMode(!darkMode)}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default ThemeToggle;