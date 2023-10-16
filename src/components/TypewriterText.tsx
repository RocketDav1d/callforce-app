'use client'
import React, { useState, useEffect } from 'react';
import styles from './styles/TypewriterText.module.css';

const words = ["cool", "amazing", "sick", "effective", "wonderful"];

const TypewriterText: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTyping) {
      if (currentWord.length < words[index].length) {
        timer = setTimeout(() => {
          setCurrentWord(prev => prev + words[index][prev.length]);
        }, 200);
      } else {
        setIsTyping(false);
      }
    } else {
      if (currentWord.length > 0) {
        timer = setTimeout(() => {
          setCurrentWord(prev => prev.slice(0, -1));
        }, 200);
      } else {
        setIsTyping(true);
        setIndex(prev => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentWord, isTyping, index]);

  return (
    <span className={`${styles.typewriter} inline-block text-5xl font-semibold text-white`}>
      {currentWord}
      <span className={styles.cursor}></span>
    </span>
  );
}

export default TypewriterText;
