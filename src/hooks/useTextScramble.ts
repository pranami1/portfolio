import { useState, useEffect, useCallback } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/";

const useTextScramble = (finalText: string, duration: number = 2000) => {
  const [text, setText] = useState("");

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalIterations = finalText.length * 3;

    const interval = setInterval(() => {
      setText(
        finalText
          .split("")
          .map((char, index) => {
            if (index < Math.floor(iteration / 3)) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > totalIterations) {
        setText(finalText);
        clearInterval(interval);
      }
    }, duration / totalIterations);

    return () => clearInterval(interval);
  }, [finalText, duration]);

  useEffect(() => {
    const timer = setTimeout(scramble, 1200);
    return () => clearTimeout(timer);
  }, [scramble]);

  return text;
};

export default useTextScramble;
