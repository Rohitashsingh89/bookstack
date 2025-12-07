import React from "react";

const LogoSvg = () => {
  return (
    <svg
      className="w-full block dark:hidden"
      viewBox="0 0 260 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ZEN Premium Circular Icon */}
      <circle
        cx="35"
        cy="35"
        r="28"
        stroke="#1F1F1F"
        strokeWidth="3"
      />

      {/* Smooth Zen Flight Curve */}
      <path
        d="M18 32C24 24 46 24 52 32"
        stroke="#1F1F1F"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Minimal Elegant Airplane Dot */}
      <circle cx="52" cy="32" r="4" fill="#1F1F1F" />

      {/* VOYZA — Bigger Text, Not Cut, Perfectly Balanced */}
      <text
        x="90"
        y="58"
        fontSize="56"
        fontWeight="700"
        fill="#000"
        letterSpacing="6"
        fontFamily="Inter, Arial, sans-serif"
      >
        VOYZA
      </text>
    </svg>
  );
};

export default LogoSvg;
