import { useState } from "react";

export function Input(props) {
    let [text, setText] = useState("");
    return (
        <div>
            <div>
                <p>{text}</p>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    )
}