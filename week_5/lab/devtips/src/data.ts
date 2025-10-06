import type { TTip } from "./types";
import { randomUUID } from "crypto";

// TODO: replace any with the correct type here!
let tips: TTip[] = [
  {
    id: randomUUID(),
    text: "Prefer const over let when you can.",
    likes: 2,
    createdAt: Date.now() - 10000,
  },
  {
    id: randomUUID(),
    text: "Name things clearly, future you will thank you.",
    likes: 5,
    createdAt: Date.now() - 5000,
  },
];

export function getTips() {
  return tips;
}

// TODO: replace any with the correct type here!
export function addTip(text: string) {
  // TODO: 🚀 Create a tip of type of TTIP and push into tips.
    let tipToAdd: TTip = {
      id: randomUUID(),
      text: `${text}`,
      likes: 0,
      createdAt: Date.now()
    }
    tips.push(tipToAdd)
    return tipToAdd
    // tips.push(tipToAdd)
  //          - id: generate a random id using node crypto
  //          - text: use incoming text
  //          - likes: by default should be 0
  //          - createdAt: just use Date.now()
  //       return the created tip when you're done.
}

// TODO: replace any with the correct type here!
export function like(id: string) {
  // TODO: 🚀 Find the tip from tips, based on id.
    tips.forEach(tip => {
        if (tip.id === id) {
          tip.likes += 1
        }
        return tip
    });
  //          - increment the number of likes
  //          - return the found and liked tip
}

// TODO: replace any with the correct type here!
export function dislike(id: string) {
  // TODO: 🚀 Find the tip from tips, based on id.
    tips.forEach(tip => {
          if (tip.id === id) {
            tip.likes -= 1
          }
          return tip
      });
  //          - decrement the number of likes if greater than 0
  //          - return the found and disliked tip
}

export function remove(id: string) {
  // TODO: 🚀 - remove the tip from tips by id by using .filter.
    let filteredTips: TTip[] = tips.filter((ident) => ident.id !== id)
    tips = filteredTips
    return filteredTips

  //          - filter should give you back an array of all tips
  //            MINUS the one you are trying to remove. set tips
  //            equal to this newly filtered list.
  //          - return true if removed, false if no change.
}