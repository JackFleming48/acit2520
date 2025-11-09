import type { TTip } from "./types.js";
import { randomUUID } from "crypto";

let tips: TTip[] = [
  {
    id: randomUUID(),
    text: "Prefer const over let when you can.",
    likes: 2,
  },
  {
    id: randomUUID(),
    text: "Name things clearly, future you will thank you.",
    likes: 5,
  },
];

export function getTips() {
  return tips;
}

export function addTip(text: string) {
  const newTip: TTip = {
    id: randomUUID(),
    text,
    likes: 0,
  };
  tips.push(newTip);
}

export function like(id: string) {
  const tip = tips.find((t) => t.id === id);
  if (tip) {
    tip.likes++;
  }
}

export function dislike(id: string) {
  const tip = tips.find((t) => t.id === id);
  if (tip && tip.likes > 0) {
    tip.likes--;
  }
}

export function remove(id: string): boolean {
  const before = tips.length;
  tips = tips.filter((t) => t.id !== id);
  return tips.length < before;
}
