import { useState } from "react";
import { useEffect } from "react";
import { FollowMouse } from "./components/FollowMouse";

function App() {
  const [mounted, setMounted] = useState(false);
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
