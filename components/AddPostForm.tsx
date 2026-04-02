"use client";
import { useState } from "react";

type Props = {
  onAdd: (post: { id: number; title: string; body: string }) => void;
};

export default function AddPostForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return alert("Both fields are required!");

    const newPost = { id: Date.now(), title, body };
    onAdd(newPost);

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "300px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>Add Post</button>
    </form>
  );
}