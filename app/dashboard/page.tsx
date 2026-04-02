"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => alert("Failed to load users"));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>User Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "300px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ margin: "0 0 10px 0" }}>{user.name}</h2>
            <p style={{ margin: "0 0 5px 0" }}>{user.email}</p>
            <p style={{ margin: "0 0 10px 0", fontStyle: "italic" }}>
              {user.company.name}
            </p>
            <button
              onClick={() => router.push(`/dashboard/users/${user.id}`)}
              style={{
                padding: "6px 12px",
                backgroundColor: "#22C55E",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              View Posts
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}