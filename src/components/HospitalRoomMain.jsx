import roomBg from "../assets/시작병실/병실기본.png";

function HospitalRoomMain() {
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
        alt="병실"
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default HospitalRoomMain;