
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "2rem"
    }}>
      {/* Clean UI - No Welcome Text */}
      <h1>DarkHost Dashboard</h1>
    </div>
  )
}
