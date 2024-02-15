import { useState } from "react";

const Prova = () => {
  const [light, setLight] = useState(true);

  setLight(!light);

  return light;
}

export default Prova;