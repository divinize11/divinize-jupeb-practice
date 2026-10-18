export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#f4f6fb",
      minHeight: "100vh",
      padding: "24px",
      color: "#17213a"
    }}>
      <header style={{
        background: "#111827",
        color: "white",
        padding: "22px",
        borderRadius: "14px"
      }}>
        <h2>DIVINIZE JUPEB PRACTICE</h2>
        <p>Your journey to better results starts here.</p>
      </header>

      <section style={{ marginTop: "30px" }}>
        <h1>Prepare smarter. Perform better.</h1>
        <p>Practise for your JUPEB examinations.</p>

        <h2>Choose Your Subject</h2>

        {["Mathematics", "Physics", "Chemistry", "Biology"].map(
          (subject) => (
            <div key={subject} style={{
              background: "white",
              padding: "18px",
              margin: "12px 0",
              borderRadius: "12px"
            }}>
              <h3>{subject}</h3>
              <p>Build your knowledge and confidence.</p>
            </div>
          )
        )}
      </section>

      <footer style={{ marginTop: "35px" }}>
        © 2026 Divinize JUPEB Practice
      </footer>
    </main>
  );
}
