// REMOVE THE COMMENT BELOW
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
type Props = {
  onAddTip: (text: string) => void;
};
export default function TipForm({ onAddTip }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // TODO1: Prevent the browser from reloading
    // TODO2: Pass text to onAddTip for insertion
    // TODO3: Wipe out form input by clearing text state
  };

  const handleChange = (e: React.ChangeEvent) => {
    // TODO: get value from input event and set state
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
