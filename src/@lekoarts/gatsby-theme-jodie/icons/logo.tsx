import * as React from "react"

const Logo = () => (
  <svg viewBox="0 0 150 150">
    <title>Dragon Face</title>
    <!-- Background circle -->
    <circle cx="75" cy="75" r="70" fill="#0F0" />

    <!-- Dragon's eye -->
    <circle cx="55" cy="60" r="10" fill="#fff" />
    <circle cx="95" cy="60" r="10" fill="#fff" />

    <!-- Dragon's mouth -->
    <path d="M75 85 Q 85 100, 75 115 Q 65 100, 75 85" fill="#F00" />
</svg>
)

export default Logo
