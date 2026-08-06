import roomBg from "../assets/시작병실/병실 천장.png";
import DialogBox from "./DialogBox";

function HospitalRoom({ onFinish }) {
    const dialogs = [
        "나: ...",
        "나: 여긴 어디지...?",
    ];


  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={roomBg}
        draggable={false}
        alt="병실"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <DialogBox
        dialogs={dialogs}
        onFinish={onFinish}
        />
    </div>
  );
}

export default HospitalRoom;