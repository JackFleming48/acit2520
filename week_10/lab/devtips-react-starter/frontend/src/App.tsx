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
      console.log(data)
      setTips(data);
    }
    getTips();
  }, []);

  // ----- Add Tip-------
  const handleAddTip = async (text: string) => {
    const newTip: TTip = {
      id: crypto.randomUUID(),
      text,
      likes: 0
    };
    setTips((prev) => [...prev, newTip])
    try {
      await fetch(`${BASE_URL}/tips`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTip),
      })
    } catch (err) {
      console.error("Failed to save new tip:", err)
    };
    console.log("New Tip:", text);
  };

  // ----- Delete Tip-------
  const handleDeleteTip = async (id: string) => {
    setTips((prev) => prev.filter((tip) => tip.id !== id));
    try {
      await fetch(`${BASE_URL}/tips/${id}/delete`, {
        method: "POST"
      })
    } catch (err) {
      console.error("Failed to delete the tip:", err)
    }
    console.log(`🚀 Delete: ${id}`);
  };

  // ----- Like Tip-------
  const handleLike = async (id: string) => {
    setTips((prev) => prev.map((tip) => tip.id === id ? {...tip, likes: tip.likes + 1}: tip))
    try {
      await fetch(`${BASE_URL}/tips/${id}/like`, {
        method: "POST"
        }) 
      } catch (err) {
        console.error("Failed to like the post", err)
      }
    console.log(`🚀 Like: ${id}`);
  };

  // ----- Dislike Tip-------
  const handleDislike = async (id: string) => {
    setTips((prev) => prev.map((tip) => tip.id === id ? {...tip, likes: tip.likes - 1}: tip))
      try {
    await fetch(`${BASE_URL}/tips/${id}/dislike`, {
      method: "POST"
      }) 
    } catch (err) {
      console.error("Failed to dislike the post", err)
    }
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
