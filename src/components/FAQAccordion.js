"use client";

import { useState } from "react";

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #1A1A1A",
        background: open ? "rgba(200,169,110,0.03)" : "transparent",
        transition: "background 0.2s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          minHeight: "64px",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "0.95rem",
            color: open ? "#C8A96E" : "#F0EBE3",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
          }}
        >
          {q}
        </span>
        <span
          aria-hidden="true"
          style={{
            width: "32px",
            height: "32px",
            border: `1px solid ${open ? "rgba(200,169,110,0.4)" : "#242424"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: open ? "#C8A96E" : "#4A4540",
            transition: "all 0.3s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <p style={{ fontSize: "0.9rem", color: "#6A6560", lineHeight: 1.8, paddingBottom: "24px", paddingRight: "52px" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
      {faqs.map((cat, ci) => (
        <div key={ci} id={`cat-${ci}`}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px", paddingBottom: "20px", borderBottom: "1px solid rgba(200,169,110,0.15)", flexWrap: "wrap" }}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "2.2rem", color: "#1A1A1A", letterSpacing: "-0.05em", lineHeight: 1 }} aria-hidden="true">
              0{ci + 1}
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.25rem", color: "#F0EBE3", letterSpacing: "-0.02em" }}>
              {cat.cat}
            </h2>
            <span
              style={{ marginLeft: "auto", padding: "3px 10px", border: "1px solid #242424", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#4A4540", letterSpacing: "0.1em" }}
              aria-label={`${cat.items.length} questions dans cette catégorie`}
            >
              {cat.items.length} questions
            </span>
          </div>

          <div role="list">
            {cat.items.map((item, ii) => (
              <div key={ii} role="listitem">
                <AccordionItem q={item.q} a={item.a} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
