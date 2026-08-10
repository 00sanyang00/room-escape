
import { useState, useEffect, useRef } from "react";

import dialogBg from "../assets/기본/대화창.png";

function DialogBox({ dialogs, onFinish }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef(null);
  const currentDialog = dialogs[index];
  const [name, text] = currentDialog.split(": ");

  useEffect(() => {
  let current = 0;

    setDisplayText("");

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
        current++;

        setDisplayText(text.slice(0, current));

        if (current >= text.length) {
        clearInterval(intervalRef.current);
        }
    }, 80);

    return () => clearInterval(intervalRef.current);
    }, [index, text]);

  const handleClick = () => {
    if (displayText.length < text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        return;
    }

    if (index < dialogs.length - 1) {
        setIndex(index + 1);
    } else {
        onFinish?.();
    }
    };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <img
        src={dialogBg}
        alt="대화창"
        draggable={false}
        style={{
          width: "100%",
          display: "block",
          userSelect: "none",
        }}
      />

      {/* 이름 */}
      <div
  style={{
    position: "absolute",
    bottom: "31%",
    left: "3%",
    width: "32%",
    textAlign: "center",

    color: "black",
    fontSize: "18px",
    fontFamily: "neodgm",
  }}
>
  {name}
</div>

      {/* 대사 */}
      <div
  style={{
    position: "absolute",
    bottom: "7%",
    left: "10%",
    right: "8%",

    height: "22%",

    color: "black",
    fontSize: "20px",
    fontFamily: "neodgm",
    lineHeight: "1.6",
    textAlign: "left",

    whiteSpace: "pre-wrap",
    overflow: "hidden",
    wordBreak: "break-word",
  }}
>
  {displayText}
</div>
    </div>
  );
}

export default DialogBox;