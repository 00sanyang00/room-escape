import { useState } from "react";
import StartScreen from "./components/StartScreen";
import HospitalRoom from "./components/HospitalRoom";
import HospitalRoomMain from "./components/HospitalRoomMain";

function App() {
  const [scene, setScene] = useState("start");

  return (
    <>
    {scene === "start" && (
      <StartScreen onStart={() => setScene("hospital")} />
    )}

    {scene === "hospital" && (
      <HospitalRoom
        onFinish={() => setScene("room")}
      />
    )}

    {scene === "room" && (
      <HospitalRoomMain />
    )}
  </>
  );
}

export default App;