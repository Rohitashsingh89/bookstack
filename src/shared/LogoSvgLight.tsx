import React from "react";

const LogoSvgLight = () => {
  return (
    <svg
      className="w-full hidden dark:block"
      viewBox="0 0 260 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ZEN Premium Circular Icon */}
      <circle
        cx="35"
        cy="35"
        r="28"
        stroke="white"
        strokeWidth="3"
        opacity="0.92"
      />

      {/* Smooth Zen Flight Curve */}
      <path
        d="M18 32C24 24 46 24 52 32"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Minimal Elegant Airplane Dot */}
      <circle cx="52" cy="32" r="4" fill="white" />

      {/* VOYZA — Bigger Text, Not Cut, Perfectly Balanced */}
      <text
        x="90"
        y="58"
        fontSize="56"
        fontWeight="700"
        fill="white"
        letterSpacing="6"
        fontFamily="Inter, Arial, sans-serif"
      >
        VOYZA
      </text>
    </svg>
  );
};

export default LogoSvgLight;
