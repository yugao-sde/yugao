import React, { useEffect, useState } from 'react'

const TypeWriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (infinite) {
      setCurrentText('');
      setCurrentIndex(0);
    }
  }, [currentIndex, delay, infinite, text]);
  return (
    <span>
      {currentText}
    </span>
  )
}

export default TypeWriter;


