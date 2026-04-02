"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function UserPosts() {
  const { id } = useParams();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => alert("Failed to load posts"));
  }, [id]);

  return (
    <div style={{ padding: "30px" }}>
      <button
        onClick={() => router.push("/dashboard")}
        style={{
          marginBottom: "20px",
          padding: "6px 12px",
          borderRadius: "6px",
          backgroundColor: "#ccc",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back to Users
      </button>

      <h1 style={{ marginBottom: "20px" }}>Posts of User {id}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "15px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "#f0f0f0",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{post.title}</h3>
            <p style={{ margin: 0 }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}