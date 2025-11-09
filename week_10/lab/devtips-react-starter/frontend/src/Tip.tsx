import type { TTip } from "./util";

type Props = TTip & {
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
  handleDelete: (id: string) => void;
};

export default function Tip({
  handleLike,
  handleDislike,
  handleDelete,
  id,
  likes,
  text,
}: Props) {
  return (
    <div className="tip-card">
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <button onClick={() => handleLike(id)}>👍</button>
      <button onClick={() => handleDislike(id)}>👎</button>
      <button onClick={() => handleDelete(id)}>🗑️</button>
    </div>
  );
}
