import { useState } from "react";
import DialogBox from "./DialogBox";

import roomBg from "../assets/시작병실/병실기본.png";
import cardImg from "../assets/시작병실/카드.png";
import cardPopupImg from "../assets/시작병실/카드 확대.png";
import documentImg from "../assets/시작병실/문서.png";
import documentPopupImg from "../assets/시작병실/카드비번힌트.png";
import doorImg from "../assets/시작병실/문.png";
import doorLockImg from "../assets/시작병실/카드비번입력.png";

function HospitalRoomMain() {
  const [cardFound, setCardFound] = useState(false);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [showDocument, setShowDocument] = useState(false);
  const [showDoorLock, setShowDoorLock] = useState(false);
  const [password, setPassword] = useState("");
  

 const handleCardClick = () => { setShowCardPopup(true); };

 const handleDocumentClick = () => { setShowDocument(true); };

 const handleDoorClick = () => {
  setShowDoorLock(true);
};

 const addNumber = (num) => {
  if (password.length < 4) {
    setPassword(password + num);
  }
};


if (showDoorLock) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <img
        src={doorLockImg}
        alt="도어락"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "36%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "32px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        {password}
      </div>
      <button
  onClick={() => addNumber("1")}
  style={{
    position: "absolute",
    left: "32%",
    top: "53%",

    width: "12%",
    height: "8%",

    opacity: 0,
    cursor: "pointer",
  }}
/>
    </div>
  );
}

  return (
    
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
         position: "relative",
      }}
    >

      <img
        src={doorImg}
        alt="문"
        onClick={handleDoorClick}
        style={{
          position: "absolute",
          right: "0px",
          width: "300px",  
          cursor: "pointer",
        }}
      />

      <img
        src={roomBg}
        alt="병실"
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      
      {!cardFound && (
        <img
          src={cardImg}
          alt="카드"
          onClick={handleCardClick}
          style={{
            position: "absolute",
            left: "20%",
            bottom: "20%",
            width: "100px",
            cursor: "pointer",
          }}
        />
      )}

      <img
      src={documentImg}
      alt="문서"
      onClick={handleDocumentClick}
      style={{
       width: "130px",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    zIndex: 4,
      }}
    />

      {showCardPopup && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.7)",
      zIndex: 100,
    }}
  >

    

    <img
      src={cardPopupImg}
      alt="카드 확대"
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        maxWidth: "350px",
      }}
    />

    <DialogBox
      dialogs={[
        "나: 병실 출입 카드인 것 같다.\n\n*카드 획득*"
      ]}
      onFinish={() => {
        setShowCardPopup(false);
        setCardFound(true);
      }}
    />

    

  </div>
)}

{showDocument && (
  <div
    onClick={() => setShowDocument(false)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
      cursor: "pointer",
    }}
  >
    <img
      src={documentPopupImg}
      alt="문서 확대"
      style={{
        width: "90%",
        maxWidth: "500px",
      }}
    />
  </div>
)}


    </div>
  );
}

export default HospitalRoomMain;