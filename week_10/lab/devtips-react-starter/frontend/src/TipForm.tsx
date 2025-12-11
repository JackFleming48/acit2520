// REMOVE THE COMMENT BELOW


import { useState } from "react";
type Props = {
  onAddTip: (text: string) => void;
};
export default function TipForm({ onAddTip }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTip(text)
    setText("")
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a New tip:"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add Tip</button>
    </form>
  );
}
