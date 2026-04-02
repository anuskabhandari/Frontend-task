"use client"; 
import Card from "../components/card";
import Task2 from "../components/task2";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div style={{ padding: "40px" }}>

      {/*HEADER (EXACT TEXT) */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "10px" }}>
          Your SkillShikshya Journey
        </p>

       <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
  <span style={{ color: "#22C55E" }}>Step</span> In.{" "}
  <span style={{ color: "#22C55E" }}>Skill</span> Up.{" "}
  <span style={{ color: "#22C55E" }}>Stand</span> Out. 🚀
</h1>
      </div>
     <button
          onClick={() => router.push("/dashboard")}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "#22C55E",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Go to Dashboard →
        </button>
     
      

      {/*  CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
        }}
      >
        <Card
          title="Start with Clarity"
          subtitle="Step into a better learning path."
          description="Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."
          color="#FF5A5F"
          image="/images/Group.png"
        />

        <Card
          title="Learn by Doing"
          subtitle="Practical skills, real projects."
          description="Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery."
          color="#5DA3BF"
          image="/images/doing.png"
          reverse
        />

        <Card
          title="Get Mentored & Supported"
          subtitle="You're not learning alone."
          description="Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own."
          color="#7C5DBF"
          image="/images/mentored.png"
        />

        <Card
          title="Achieve & Showcase"
          subtitle="Build your portfolio, get job-ready."
          description="Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
          color="#A68C6F"
          image="/images/showcase.png"
          reverse
        />
      </div>
       {/* TASK 2: Stats Section */}
      <Task2 />
    </div>

    
  );
}


