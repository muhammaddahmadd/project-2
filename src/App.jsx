import { useState } from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Display from "./Display";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="h-screen">
      <Navbar />
      <Contact setUser={setUser} />
      <Display user={user} />
    </div>
  );
}

export default App;
