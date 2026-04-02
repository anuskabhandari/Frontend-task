"use client";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  reverse?: boolean;
};

export default function Card({
  title,
  subtitle,
  description,
  color,
  image,
  reverse = false,
}: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: color,
        color: "white",
        minHeight: "220px",
        overflow: "hidden",
      }}
    >
      {/* TEXT */}
      <div style={{ maxWidth: "55%" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
          {title}
        </h3>

        <p style={{ fontSize: "14px", fontStyle: "italic", marginBottom: "10px" }}>
          {subtitle}
        </p>

        <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
          {description}
        </p>
      </div>

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        style={{
          width: "150px",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}