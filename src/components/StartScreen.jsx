import startBg from "../assets/기본/시작배경.png";
import startButton from "../assets/기본/시작버튼.png";

function StartScreen({ onStart }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={startBg}
        draggable={false}
        alt="시작 배경"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <img
        src={startButton}
        alt="시작 버튼"
        onClick={onStart}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10%",
          transform: "translateX(-50%)",
          width: "180px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default StartScreen;