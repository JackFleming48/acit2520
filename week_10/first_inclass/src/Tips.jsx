import { useState } from "react";

export function Tips() {
    let [tips, setTips] = useState([
        {id: 1, text: "study lots"},
        {id: 2, text: "nathan is a computer"},
    ]);
    return (
        <ul>
            {tips.map(obj => (<li>{obj.text}</li>))}
        </ul>
    )
}