import "./App.css";
import Tip from "./Tip";
import TipForm from "./TipForm";
import { useEffect, useState } from "react";
import { BASE_URL, type TTip } from "./util";

function App() {
  const [tips, setTips] = useState<TTip[]>([]);

  // -- 🖐️ useEffect runs when you FIRST visit the component 🖐️ --
  // -- 🖐️ This makes it the perfect spot to hit our backend 🖐️ --
  useEffect(() => {
    async function getTips() {
      const res = await fetch(`${BASE_URL}/tips`);
      const data = await res.json();
      setTips(data);
    }
    getTips();
  }, []);

  // ----- Add Tip-------
  const handleAddTip = (text: string) => {
    // TODO: Create new tip and Add tip to end of tips list state (optimistically)
    // TODO: fire off a mutation to the backend for persistence
    console.log("New Tip:", text);
  };

  // ----- Delete Tip-------
  const handleDeleteTip = (id: string) => {
    // TODO: Delete tip by id from list state(optimistically)
    // TODO: fire off a mutation to the backend for persistence
    console.log(`🚀 Delete: ${id}`);
  };

  // ----- Like Tip-------
  const handleLike = (id: string) => {
    // TODO: Increase number of likes by 1
    // TODO: fire off a mutation to the backend for persistence
    console.log(`🚀 Like: ${id}`);
  };

  // ----- Dislike Tip-------
  const handleDislike = (id: string) => {
    // TODO: Reduce number of likes by 1
    // TODO: fire off a mutation to the backend for persistence
    console.log(`🚀 Dislike: ${id}`);
  };

  return (
    <div>
      <h1>Dev Tips 👨‍💻</h1>

      <TipForm onAddTip={handleAddTip} />

      {tips.map((tip) => (
        <Tip
          handleDelete={handleDeleteTip}
          key={tip.id}
          handleLike={handleLike}
          handleDislike={handleDislike}
          {...tip}
        />
      ))}
    </div>
  );
}

export default App;
