"use client";

export default function StatsSection() {
  return (
    <div style={{ padding: "40px" }}>

      {/* Top text */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "8px" }}>
          Explore our classes and master trending skills!
        </p>
        <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Dive Into <span style={{ color: "#22C55E" }}>What's Hot Right Now!</span> 🔥
        </h2>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap", // responsive
      }}>

        {/* All Courses */}
        <div style={{
          backgroundColor: "#B91C1C",
          color: "white",
          padding: "20px",
          borderRadius: "16px",
          flex: "2",
          minWidth: "200px"
        }}>
          {/* Icons row */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <img
              src="/images/react.png"
              alt="React"
              style={{ width: "75px", height: "75px", transform: "rotate(-10deg)" }}
            />
            <img
              src="/images/thumb.png"
              alt="Thumb"
              style={{ width: "75px", height: "75px", transform: "rotate(5deg)" }}
            />
            <img
              src="/images/vue.png"
              alt="Vue"
              style={{ width: "55.75px", height: "75px", transform: "rotate(-5deg)" }}
            />
            <img
              src="/images/rocket.png"
              alt="Rocket"
              style={{ width: "75px", height: "75px", transform: "rotate(10deg)" }}
            />
          </div>

          <h3 style={{ fontSize: "36px", fontWeight: "bold", margin: 0 }}>23+</h3>
          <p style={{ marginTop: "5px" }}>courses you're powering through right now.</p>
        </div>

        {/* Upcoming Courses */}
        <div style={{
          backgroundColor: "#FEE2E2",
          padding: "20px",
          borderRadius: "16px",
          flex: "1",
          minWidth: "100px"
        }}>
          <h3 style={{ color: "#B91C1C", fontWeight: "bold", margin: 0 }}>Upcoming Courses</h3>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#B91C1C", margin: "5px 0" }}>05+</h2>
          <p style={{ fontSize: "12px", margin: 0 }}>exciting new courses waiting to boost your skills…</p>
        </div>

        {/* Ongoing Courses */}
        <div style={{
          backgroundColor: "#FEE2E2",
          padding: "20px",
          borderRadius: "16px",
          flex: "1",
          minWidth: "100px"
        }}>
          <h3 style={{ color: "#B91C1C", fontWeight: "bold", margin: 0 }}>Ongoing Courses</h3>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#B91C1C", margin: "5px 0" }}>10+</h2>
          <p style={{ fontSize: "12px", margin: 0 }}>currently happening—don’t miss out on the action!</p>
        </div>

      </div>
    </div>
  );
}